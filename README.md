# SARZYNSKY — portfolio video / photo

Strona zbudowana w [Astro](https://astro.build), hostowana na GitHub Pages.

## Start lokalnie
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gotowa strona w dist/
```

## Gdzie co zmieniać
| Co | Plik |
|---|---|
| Nazwa, mail, Instagram, showreel | `src/data/site.js` |
| Projekty (video i foto) | `src/data/projects.js` |
| Kolory, fonty | `src/styles/global.css` (sekcja `:root`) |
| Tekst „About” | `src/pages/about.astro` |

**Dodanie projektu:** dopisz obiekt do `projects.js`. Dla video wklej link do embeda
(YouTube: `https://www.youtube.com/embed/ID`, Vimeo: `https://player.vimeo.com/video/ID`).
Dla zdjęć wrzuć pliki do `public/photos/nazwa-projektu/` i podaj ścieżki `'/photos/nazwa-projektu/01.jpg'`.

**Showreel w tle:** wrzuć `public/video/showreel.mp4` (wyciszony, 10–30 s, najlepiej < 10 MB, H.264).
Duże filmy trzymaj na YouTube/Vimeo — GitHub ma limit 100 MB na plik.

## Publikacja na GitHub Pages
1. Utwórz repo na GitHubie i wypchnij kod na branch `main`.
2. W `astro.config.mjs` ustaw `site` (i `base`, jeśli repo nie nazywa się `USERNAME.github.io`).
3. Na GitHubie: **Settings → Pages → Source: GitHub Actions**.
4. Każdy push na `main` automatycznie buduje i publikuje stronę.

Własna domena: Settings → Pages → Custom domain + plik `public/CNAME` z nazwą domeny.
