/**
 * Leady ze strony sarzynsky: zapytanie z koszyka trafia do Gmaila, Arkusza Google i Kalendarza.
 *
 * Instalacja (raz):
 * 1. Utwórz nowy Arkusz Google „Leady ze strony”.
 * 2. Rozszerzenia → Apps Script. Usuń przykładowy kod i wklej ten plik.
 * 3. Ustawienia projektu (ikona koła zębatego) → Strefa czasowa: (GMT+01:00) Warszawa.
 * 4. Wybierz funkcję setup i kliknij „Uruchom”. Zatwierdź uprawnienia (Gmail, Arkusz, Kalendarz).
 * 5. Wdróż → Nowe wdrożenie → typ „Aplikacja internetowa”.
 *    Wykonaj jako: Ja. Kto ma dostęp: Wszyscy. Skopiuj adres URL kończący się na /exec.
 *
 * Plik nie zawiera żadnych haseł ani kluczy. Adres /exec jest publiczny z założenia
 * (strona musi go znać), dlatego skrypt sam pilnuje spamu i poprawności danych.
 */

const TO = 'j.sarzynsky+leady@gmail.com'; // +leady: ta sama skrzynka, a filtr w Gmailu wrzuca to do etykiety „Leady”
const SHEET = 'Leady';
const ADD_TO_CALENDAR = true;         // przypomnienie „oddzwoń” w kalendarzu
const CALL_HOUR = 17;                 // o której przypomnienie (następny dzień roboczy)
const MAX_PER_HOUR = 30;              // bezpiecznik na wypadek zalewu spamu

const LIMITS = { name: 80, email: 120, phone: 30, company: 80, contact: 40, when: 80, msg: 1500, items: 1500, total: 30 };

function setup() {
  const sh = sheet_();
  if (sh.getLastRow() === 0) {
    sh.appendRow(['Data', 'Imię i nazwisko', 'E-mail', 'Telefon', 'Firma', 'Kontakt', 'Termin', 'Wybrane', 'Szacunkowo', 'Wiadomość', 'Status']);
    sh.setFrozenRows(1);
  }
  // dotknięcie usług, żeby Google od razu poprosił o wszystkie uprawnienia
  MailApp.getRemainingDailyQuota();
  if (ADD_TO_CALENDAR) CalendarApp.getDefaultCalendar().getName();
}

function doGet() {
  return json_({ ok: true, service: 'leady' });
}

function doPost(e) {
  try {
    const raw = e && e.postData && e.postData.contents;
    if (!raw || raw.length > 10000) return json_({ ok: false, error: 'bad_request' });
    const d = JSON.parse(raw);

    // pułapki na boty: ukryte pole i zbyt szybkie wysłanie formularza
    if (d.website) return json_({ ok: true });
    if (!(Number(d.elapsed) >= 3000)) return json_({ ok: false, error: 'too_fast' });

    const v = {};
    Object.keys(LIMITS).forEach((k) => {
      v[k] = String(d[k] == null ? '' : d[k]).replace(/\r/g, '').trim().slice(0, LIMITS[k]);
    });
    ['name', 'email', 'phone', 'company', 'contact', 'when', 'total'].forEach((k) => (v[k] = v[k].replace(/\n+/g, ' ')));
    if (!v.name) return json_({ ok: false, error: 'name' });
    if (!/^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/.test(v.email)) return json_({ ok: false, error: 'email' });
    if (d.consent !== true) return json_({ ok: false, error: 'consent' });

    const cache = CacheService.getScriptCache();
    const n = Number(cache.get('n') || 0);
    if (n >= MAX_PER_HOUR) return json_({ ok: false, error: 'busy' });
    cache.put('n', String(n + 1), 3600);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    try {
      sheet_().appendRow([new Date(), cell_(v.name), cell_(v.email), cell_(v.phone), cell_(v.company), cell_(v.contact),
        cell_(v.when), cell_(v.items), cell_(v.total), cell_(v.msg), 'Nowy']);
    } finally {
      lock.releaseLock();
    }

    const text = [
      'Nowe zapytanie ze strony.', '',
      'Wybrane:', v.items || 'bez pakietu (wycena indywidualna)', v.total ? 'Szacunkowo: ' + v.total : '', '',
      'Imię i nazwisko: ' + v.name,
      'E-mail: ' + v.email,
      v.phone && 'Telefon: ' + v.phone,
      v.company && 'Firma: ' + v.company,
      'Preferowany kontakt: ' + (v.contact || 'E-mail'),
      v.when && 'Termin: ' + v.when,
      v.msg && '\nO projekcie:\n' + v.msg,
      '', 'Odpowiedz na tego maila, żeby napisać prosto do klienta.',
    ].filter((x) => x !== false && x !== undefined).join('\n');

    // zwykły tekst (bez HTML), więc treść od klienta nie może wstrzyknąć niczego do maila
    MailApp.sendEmail({ to: TO, replyTo: v.email, name: 'Strona SARZYNSKY', subject: 'Lead: ' + v.name + (v.contact.indexOf('Konsultacja') === 0 ? ' (konsultacja)' : ''), body: text });

    if (ADD_TO_CALENDAR) {
      const start = nextWorkday_(CALL_HOUR);
      const end = new Date(start.getTime() + 15 * 60000);
      CalendarApp.getDefaultCalendar()
        .createEvent('Oddzwoń: ' + v.name + (v.phone ? ' ' + v.phone : ''), start, end, { description: text })
        .addPopupReminder(15);
    }
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server' });
  }
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheetByName(SHEET) || ss.insertSheet(SHEET);
}

// Arkusz traktuje tekst zaczynający się od = + - @ jak formułę; apostrof wyłącza to (ochrona przed wstrzyknięciem formuły)
function cell_(s) {
  return /^[=+\-@\t]/.test(s) ? "'" + s : s;
}

function nextWorkday_(hour) {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  d.setHours(hour, 0, 0, 0);
  return d;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
