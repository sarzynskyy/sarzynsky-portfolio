# Historia zmian — sarzynsky.portfolio

Strona robocza: https://sarzynskyy.github.io/sarzynsky-portfolio/
Każda zmiana na gałęzi `main` publikuje się automatycznie (GitHub Actions → GitHub Pages).

## Etap prac

| # | Etap | Status |
|---|---|---|
| 1 | Start: projekt sprawdzony, repo na GitHubie, strona robocza online | ✅ gotowe |
| 2 | Wygląd: dopasowanie do Instagrama, układ z sekcjami projektów | 🔄 w trakcie |
| 3 | Treści: projekty z Google Drive, showreel, O mnie, oferta | ⏳ |
| 4 | Kontakt i CTA: formularz, przyciski, RODO | ⏳ |
| 5 | SEO: meta, Open Graph, sitemap, robots.txt, schema.org | ⏳ |
| 6 | Hosting, domena, SSL, nagłówki bezpieczeństwa | ⏳ |
| 7 | Google Search Console, audyt końcowy (UX/UI, WCAG 2.2 AA, Lighthouse) | ⏳ |

Stałe zasady: bezpieczeństwo, UX/UI (WCAG 2.2 AA, mobile-first), każda zmiana po akceptacji właściciela.

## Zmiany

### 2026-10-19
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
