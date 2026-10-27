# Historia zmian — sarzynsky.portfolio

Strona robocza: https://sarzynskyy.github.io/sarzynsky-portfolio/
Każda zmiana na gałęzi `main` publikuje się automatycznie (GitHub Actions → GitHub Pages).

## Etap prac

| # | Etap | Status |
|---|---|---|
| 1 | Start: projekt sprawdzony, repo na GitHubie, strona robocza online | ✅ gotowe |
| 2 | Wygląd: dopasowanie do Instagrama, układ z sekcjami projektów | 🔄 w trakcie |
| 3 | Treści: projekty z Google Drive, showreel, O mnie, oferta | 🔄 w trakcie (3 projekty online) |
| 4 | Kontakt i CTA: formularz, przyciski, RODO | ⏳ |
| 5 | SEO: meta, Open Graph, sitemap, robots.txt, schema.org | ⏳ |
| 6 | Hosting, domena, SSL, nagłówki bezpieczeństwa | ⏳ |
| 7 | Google Search Console, audyt końcowy (UX/UI, WCAG 2.2 AA, Lighthouse) | ⏳ |

Stałe zasady: bezpieczeństwo, UX/UI (WCAG 2.2 AA, mobile-first), każda zmiana po akceptacji właściciela.

## Zmiany

### 2026-10-27
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
