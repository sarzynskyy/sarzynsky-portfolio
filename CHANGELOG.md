# Historia zmian — sarzynsky.portfolio

Strona robocza: https://sarzynskyy.github.io/sarzynsky-portfolio/
Każda zmiana na gałęzi `main` publikuje się automatycznie (GitHub Actions → GitHub Pages).

## Etap prac

| # | Etap | Status |
|---|---|---|
| 1 | Start: projekt sprawdzony, repo na GitHubie, strona robocza online | ✅ gotowe |
| 2 | Wygląd: dopasowanie do Instagrama, układ z sekcjami projektów | 🔄 w trakcie |
| 3 | Treści: projekty z Google Drive, showreel, O mnie, oferta | 🔄 w trakcie (3 projekty online) |
| 4 | Kontakt i CTA: formularz, przyciski, RODO | 🔄 w trakcie (koszyk zapytań działa przez pocztę; czeka na wybór usługi formularzy i rezerwacji) |
| 5 | SEO: meta, Open Graph, sitemap, robots.txt, schema.org | ⏳ |
| 6 | Hosting, domena, SSL, nagłówki bezpieczeństwa | ⏳ |
| 7 | Google Search Console, audyt końcowy (UX/UI, WCAG 2.2 AA, Lighthouse) | ⏳ |

Stałe zasady: bezpieczeństwo, UX/UI (WCAG 2.2 AA, mobile-first), każda zmiana po akceptacji właściciela.

## Zmiany

### 2026-10-27
- **Strona główna, tło:** zamiast pustego odtwarzacza (showreel nie istniał, na telefonie było czarne tło) zapętlone 14 s ujęć z moich realizacji motoryzacyjnych, spowolnione i przyciemnione, z delikatnym, powolnym przybliżeniem. Na telefonie osobna wersja pionowa, na komputerze pozioma (każda ok. 1 MB). Film gra tylko wtedy, gdy jest na ekranie; przy ograniczonym ruchu albo oszczędzaniu danych zostaje sama klatka. Kadry bez tablic rejestracyjnych.
- **Strona główna, opis:** „Kręcę i montuję filmy na YouTube Maćka Dudy. Dla marek robię rolki i zdjęcia.” zamiast „Video & photo. Ruch, światło, ludzie.”; nad tytułem „Kraków · wideo i zdjęcia” zamiast „Showreel 2026”.
- **Jeden formularz kontaktu na całej stronie:** „Kontakt” w menu, „Napisz do mnie” w stopce, „Wyceń projekt” na stronie głównej, „Poproś o wycenę” w cenniku, „Chcesz coś podobnego?” w projektach i przycisk w O mnie otwierają ten sam panel zapytania (wysyłka do Gmaila, Arkusza i Kalendarza) z podpisanym tematem, np. „Wycena indywidualna” albo „Coś podobnego do: Ironman Tallinn”. Bez JavaScriptu linki nadal otwierają pocztę. Adres e-mail w stopce zostaje zwykłym linkiem.
- **Cennik:** tytuł i opis wyrównane do lewej krawędzi strony, dokładnie jak w Pracach (wcześniej siedziały w wyśrodkowanej kolumnie).
- **Zapytania z koszyka włączone:** wysyłka do skryptu Google (Gmail z etykietą „Leady”, Arkusz „Leady ze strony”, przypomnienie w Kalendarzu) zamiast programu pocztowego klienta.
- **Leady w osobnej etykiecie Gmaila:** powiadomienia idą na adres j.sarzynsky+leady@gmail.com (ta sama skrzynka), więc filtr w Gmailu może je automatycznie odkładać do etykiety „Leady”. Skrypt nie dostaje przez to dostępu do reszty poczty.
- **Zapytania prosto do Gmaila (przygotowane):** skrypt Google Apps Script (integrations/google-apps-script/Leady.gs) zapisuje zapytanie w Arkuszu Google, wysyła powiadomienie na Gmail (odpowiedź trafia prosto do klienta) i dodaje w kalendarzu przypomnienie „Oddzwoń”. Ochrona: ukryte pole i minimalny czas wypełnienia przeciw botom, limit zapytań na godzinę, przycięte i sprawdzone dane, mail jako czysty tekst, zabezpieczenie arkusza przed wstrzyknięciem formuł. Po wysłaniu koszyk pokazuje podziękowanie i się czyści; przy błędzie można wysłać przez własną pocztę. Włączy się po wpisaniu adresu skryptu w src/data/site.js (leadEndpoint).
- **Konsultacje online:** przycisk „Umów konsultację” w koszyku i w bloku wyceny indywidualnej w cenniku. Prowadzi do strony rezerwacji w Kalendarzu Google (30 min, Google Meet, pon–pt 17:00–20:00), otwieranej w nowej karcie. Kalendarz nie jest osadzony na stronie, więc odwiedzający nie ładują skryptów ani ciasteczek Google, dopóki sami nie klikną.
- **Koszyk zapytań (bez płatności):** ikona koszyka z licznikiem w pasku menu na każdej stronie. W cenniku przyciski „Wybieram…” i „Dodaj” wkładają pakiet (jeden naraz) i dodatki do koszyka; koszyk liczy kwotę szacunkową (dodatkowe rolki z ilością, wersja pozioma razy liczba rolek, ekspres +30% od sumy). W koszyku formularz: imię, e-mail, telefon, firma, forma kontaktu (e-mail, telefon, konsultacja online), termin, opis i zgoda na użycie danych. Na razie „Wyślij zapytanie” otwiera pocztę klienta z gotową wiadomością; po wyborze usługi zapytania będą trafiać prosto na Gmail. Koszyk pamięta tylko identyfikatory pozycji w przeglądarce, bez danych osobowych; dane z formularza nie są nigdzie zapisywane.
- **Menu na telefonie:** logo, koszyk i przycisk menu; linki w rozwijanym panelu pod paskiem (duże pola, Esc zamyka). Wcześniej po dodaniu koszyka menu nie mieściło się na wąskim ekranie.
- **Cennik:** tytuł i opis po lewej, jak na pozostałych podstronach; pakiety, dodatki i FAQ zostają na środku. Krótka instrukcja pod pakietami, jak działa koszyk.
- **Cennik, spójność i bezpieczeństwo prawne:** cała strona w jednej, wyśrodkowanej kolumnie (max 1200 px), nagłówki sekcji na środku; pojedyncza rolka 990 zł, Start 2 490 zł; zastrzeżenie, że ceny są orientacyjne i nie stanowią oferty (art. 66 § 1 k.c.), plus pytanie „Czy to ostateczne ceny?” w FAQ; plusy w dodatkach rysowane, więc idealnie na środku; uczciwy opis wersji poziomej (przekadrowanie, zaplanowane przed zdjęciami).
- **Cennik, poprawka:** dodatkowa rolka 650 zł zamiast 450 zł (była tańsza niż rolka w pakiecie Pro, więc pakiety przestawały się opłacać); usunięty nieprawdziwy opis.
- **Cennik, poprawki:** znaczek „Najczęściej wybierany” zamiast „Polecany”; mniejsze karty pakietów; dodatki jako wyraźne kafelki z opisem i ceną w kolorze akcentu (m.in. wyjaśnione, czym jest format poziomy 16:9); sekcje Dodatki, Wycena indywidualna i FAQ wyraźniej od siebie oddzielone (nagłówki, odstępy, czerwony akcent w bloku wyceny).
- **Nowa strona /cennik:** pojedyncza rolka jako kotwica cenowa (1 200 zł), pakiety Start (3 rolki), Seria (6 rolek, polecany, wyróżniony na środku) i Pro (10 rolek) z ceną za rolkę, przekreśloną ceną pojedynczą i „taniej o X%”; lista, co wchodzi w pakiet; dodatki; wycena indywidualna; FAQ. Animacje: karty wjeżdżają po kolei, ceny odliczają się, punkty listy pojawiają się kolejno, polecany pakiet delikatnie pulsuje (wyłączone przy ograniczonym ruchu). Ceny to propozycja do zatwierdzenia, zmienia się je w src/data/pricing.js.
- **Menu:** dodany link „Cennik”; na stronie głównej przycisk „Zobacz cennik” obok „Wyceń projekt”.
- **Interlinia nagłówków 1,3 (zmierzona):** w kroju Anton kreska nad Ó sięga 1,11 em nad linię pisma, a przecinek 0,125 em pod nią; przy 1,15 nadal się stykały.
- **Interlinia nagłówków 1,15:** przecinek w pierwszej linii i kreska nad Ó w drugiej (np. „Maratony, rower i góry”) już się nie stykają.
- **Odstępy:** większa interlinia dużych nagłówków (polskie znaki nie nachodzą na linię wyżej); w sekcjach projektów na stronie głównej równe odstępy: kategoria, tytuł, opis, podpis, „Zobacz projekt”; nieco mniejszy tytuł projektu.
- **Stały, większy pasek menu:** na każdej stronie u góry, zawsze na ciemnym rozmytym tle (84 px na komputerze, 64 px na telefonie); większe logo i menu (Prace, O mnie, Kontakt jako przycisk), podkreślenie aktywnej strony, pola kliknięcia min. 44 px. Usunięty efekt odwracania kolorów, bo na stałym tle nie miał już zastosowania.
- **Ścieżka okruszków na podstronach:** Start / Prace / Nazwa projektu, Start / Prace, Start / O mnie; z danymi strukturalnymi BreadcrumbList dla Google.
- **Kotwice** (np. „Zobacz prace”) nie chowają się pod stałym paskiem.
- **Droga do Ironmana, nowy układ:** pasek liczb pod tytułem (1 TB materiału, 100+ h montażu, 6 etapów, 226 km) z odliczaniem; punkty trasy rosną z każdym etapem, grubsza linia z czerwonym postępem; panel etapu: film duży po lewej, po prawej nazwa, kafelki pływanie / rower / bieg i pasek „% pełnego dystansu”. Usunięty powielony duży napis etapu.
- **Nagłówek:** po zjechaniu w dół dostaje ciemne, rozmyte tło, więc menu nie zlewa się z filmami (wcześniej nachodziło na napisy YouTube).
- **Droga do Ironmana na komputerze też pozioma:** ta sama prosta trasa co na telefonie, tylko większa, z kilometrami pod każdym etapem; opis etapu obok filmu. Ukośna mapa usunięta.
- **Droga do Ironmana na telefonie:** zamiast małej ukośnej mapy prosta, pozioma trasa z 6 wyraźnymi punktami i podpisami; pod nią film wybranego etapu, nazwa, dystans i przyciski poprzedni/następny. Całość mieści się na jednym ekranie. Komputer bez zmian.
- **Filmy YouTube osadzone na stałe:** zamiast miniatury z przyciskiem od razu widać player YouTube (tryb bez ciasteczek). Filmy niżej na stronie ładują się dopiero przy przewinięciu.
- **Droga do Ironmana w krótszej formie:** ukośna trasa pod górę z 6 punktami (od pomiarów do mety) zamiast długiej listy; klik w etap pokazuje pod spodem jego film, dystans i przyciski poprzedni/następny. Animacje: trasa rysuje się po wejściu w widok, punkty pojawiają się po kolei, czerwony odcinek „dojeżdża” do wybranego etapu, pasek dystansu rośnie. Obsługa strzałkami z klawiatury; animacje wyłączone przy ograniczonym ruchu.
- **Ironman Tallinn: „Droga do Ironmana”** jako trasa etapów: Start (pomiary VO2max i bike fitting), 1/8, 1/4, 1/2, 70.3 Gdynia i pełny dystans w Tallinnie. Przy każdym etapie film i pasek dystansu (pływanie, rower, bieg). Trasa „rysuje się” w kolorze akcentu podczas przewijania (z wyłączeniem dla osób, które mają ograniczony ruch w systemie).
- **AnyTaxi usunięte** ze strony (projekt i pliki rolek), na prośbę właściciela.
- **Ironman w jednym projekcie:** „Ironman Tallinn” i „Droga do Ironmana” połączone w jedną podstronę: Tallinn jako główny film, pod nim 5 odcinków przygotowań.
- **Strona główna:** wyróżnione projekty to teraz Ironman Tallinn, Runmageddon oraz Maratony, rower i góry.

### 2026-10-19
- **Nowa organizacja treści:** projekt = jedna współpraca lub wydarzenie, z polami: dla kogo, kategoria, rok, rola, formaty. Kategorie: Sport, Motoryzacja, Reklama i social media, Eventy.
- **Strona główna:** duże sekcje wybranych projektów, pasek „Pracowałem z”, „Co robię” i przycisk „Wyceń projekt”.
- **Nowa strona /prace:** wszystkie projekty z filtrem kategorii (dostępny z klawiatury, bez JS widać wszystko).
- **Podstrony projektów pod /prace/…:** filmy YouTube, rolki, zdjęcia z powiększeniem, sekcja „Chcesz coś podobnego?”.
- **Projekty Maćka Dudy podzielone według wydarzeń:** Ironman Tallinn, Droga do Ironmana, Runmageddon, Maratony, rower i góry.
- **AnyTaxi:** 4 rolki rekrutacyjne (720p, 2,8 do 4,3 MB, bez plansz z numerem telefonu), ładowane dopiero po kliknięciu.
- **Polskie menu i adresy:** Prace, O mnie, Kontakt; /o-mnie zamiast /about. Stopka: „Napisz do mnie”. Mail kontaktowy: j.sarzynsky@gmail.com.
- **Usunięte przykładowe projekty z szablonu.**
- **Teksty:** usunięte myślniki (— i –) z treści strony i tytułów kart przeglądarki; zastąpione kropką, przecinkiem, dwukropkiem lub „|”.
- **Projekt „Maciek Duda — YouTube”:** podstrona z filmem Ironman Tallinn na górze i 13 kolejnymi odcinkami; opis roli (zdjęcia, montaż, produkcja) i skali projektu.
- **Player YouTube przyjazny prywatności:** film ładuje się dopiero po kliknięciu, w trybie bez ciasteczek (youtube-nocookie); bez JavaScriptu działa jako link do YouTube.
- **Miniatury filmów na własnym serwerze:** pobierane automatycznie przy budowaniu strony i konwertowane do WebP — przy wejściu na stronę nic nie łączy się z Google.
- **CI:** jawne kroki budowania (Node 24, npm ci), a przy błędzie — jego treść w podsumowaniu GitHub Actions.

### 2026-10-13
- **Nagłówek:** efekt odwracania kolorów (logo/menu dopasowują się do tła) w wersji czarno-białej — bez niebieskiego nad ciepłymi zdjęciami.
- **Nagłówek:** logo „SARZYNSKY” i menu w kolorze białym zamiast niebieskiego.
- **CI:** budowanie na Node 24 i aktualnych wersjach akcji (Astro 7 wymaga Node ≥ 22.12) — naprawiony nieudany pierwszy build.
- **Konfiguracja:** adres roboczy `sarzynskyy.github.io/sarzynsky-portfolio`.
- **Start:** projekt przeniesiony do repozytorium GitHub z pełną historią commitów.
