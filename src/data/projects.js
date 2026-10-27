// Każdy projekt = jedna współpraca lub wydarzenie = jedna podstrona /prace/<slug>.
//
// Pola:
//   slug        adres podstrony (małe litery, bez polskich znaków)
//   title       tytuł projektu
//   clients     dla kogo (lista: twórcy, marki); trafiają też do sekcji „Pracowałem z”
//   category    sport | motoryzacja | reklama | eventy  (patrz categories.js)
//   year        rok (opcjonalnie)
//   role        Twoja rola
//   description 1 do 3 zdań o projekcie
//   highlight   opcjonalna wyróżniona linijka (liczby, skala)
//   featured    true = duża sekcja na stronie głównej (kolejność jak w tej liście)
//   cover       okładka (ścieżka w public/)
//   youtube     [{ id, title }]           pierwszy = główny film
//   reels       [{ src, poster, title }]  pionowe rolki z public/reels/
//   photos      [{ src, alt }]            zdjęcia (galeria z powiększeniem)

const reel = (dir, name, title) => ({ src: `/reels/${dir}/${name}.mp4`, poster: `/reels/${dir}/${name}.webp`, title });

export const projects = [
  {
    slug: 'ironman-tallinn',
    title: 'Ironman Tallinn',
    clients: ['Maciek Duda'],
    category: 'sport',
    year: 2026,
    role: 'Zdjęcia · Montaż · Produkcja',
    featured: true,
    cover: '/yt/0qbRgEXaAto.webp',
    description:
      'Pełny dystans IRONMAN w Tallinnie i cała droga do niego: 1/8, 1/4 i 1/2 dystansu, IRONMAN 70.3 Gdynia oraz badanie VO2max z bike fittingiem. Seria dla kanału Maćka Dudy.',
    youtube: [
      { id: '0qbRgEXaAto', title: 'Zostałem Ironmanem!!! [Tallin 2026]' },
      { id: 'auqi3ONpz1Q', title: 'Zaczynam największe wyzwanie mojego życia!! [1/8 Ironman]' },
      { id: 'zYg_r5qTtX8', title: 'Zrobiłem życiówkę!!! [1/4 Ironman]' },
      { id: 'DTmH1yYfMp8', title: 'Przetrwałem 1/2 Ironman! (trudniejsze niż myślałem)' },
      { id: 'OfqiBj4TIDM', title: 'Podjazdy mnie zmiażdżyły… (Ironman 70.3 Gdynia)' },
      { id: '_6zKvs7Lwv4', title: 'Jaki jest mój limit?! (VO2max & bike fitting)' },
    ],
    // Droga do Ironmana: etapy od najniższego do najwyższego.
    // swim/bike/run w km (standardowe dystanse triathlonu), video = ID z listy youtube wyżej.
    journey: {
      title: 'Droga do Ironmana',
      // liczby w pasku pod tytułem (odliczają się przy pojawieniu na ekranie)
      stats: [
        { value: 1, suffix: ' TB', label: 'materiału z Tallinna' },
        { value: 100, suffix: '+ h', label: 'montażu i produkcji' },
        { value: 6, label: 'etapów' },
        { value: 226, suffix: ' km', label: 'na mecie' },
      ],
      intro: 'Od pomiarów w laboratorium do pełnego dystansu. Każdy etap to osobny film, kliknij, żeby obejrzeć.',
      stages: [
        { label: 'Start', name: 'Pomiary: VO2max i bike fitting', note: 'Badanie wydolności i dopasowanie roweru na początku drogi.', video: '_6zKvs7Lwv4' },
        { label: '1/8', name: 'Początek wyzwania', swim: 0.475, bike: 22.5, run: 5.275, video: 'auqi3ONpz1Q' },
        { label: '1/4', name: 'Życiówka', swim: 0.95, bike: 45, run: 10.55, video: 'zYg_r5qTtX8' },
        { label: '1/2', name: 'Połowa dystansu', swim: 1.9, bike: 90, run: 21.1, video: 'DTmH1yYfMp8' },
        { label: '70.3', name: 'IRONMAN 70.3 Gdynia', swim: 1.9, bike: 90, run: 21.1, video: 'OfqiBj4TIDM' },
        { label: 'Pełny', name: 'IRONMAN Tallinn', swim: 3.8, bike: 180, run: 42.2, video: '0qbRgEXaAto', finish: true },
      ],
    },
  },
  {
    slug: 'runmageddon',
    title: 'Runmageddon',
    clients: ['Maciek Duda'],
    category: 'sport',
    role: 'Zdjęcia · Montaż · Produkcja',
    featured: true,
    cover: '/yt/OoEZxWh4frI.webp',
    description: 'Biegi z przeszkodami Runmageddon, w tym edycja Hardcore i Gravel.',
    youtube: [
      { id: 'OoEZxWh4frI', title: 'Ból, błoto i góry: Runmageddon Hardcore i Gravel' },
      { id: 'frbKCOPm0Hs', title: 'Runmageddon, czy to takie trudne?!' },
    ],
  },
  {
    slug: 'maratony-rower-gory',
    title: 'Maratony, rower i góry',
    clients: ['Maciek Duda'],
    category: 'sport',
    role: 'Zdjęcia · Montaż · Produkcja',
    featured: true,
    cover: '/yt/-YyfYTLpwWE.webp',
    description:
      'Maraton Warszawski, przejazd rowerem przez całą Polskę, wejście na Giewont i inne sportowe wyzwania z kanału Maćka Dudy.',
    youtube: [
      { id: '-YyfYTLpwWE', title: 'Przejechałem Polskę rowerem!! [z południa na północ]' },
      { id: '_Ev48GCUOPw', title: 'Miałem łzy w oczach!! (Maraton Warszawski)' },
      { id: '3tC1sCYkmO8', title: 'Test siły przed maratonem!!!' },
      { id: 'h5ds17S8QkE', title: 'Nie sądziłem, że to będzie takie trudne!' },
      { id: 'S7GxZJhS9GI', title: 'To on wygrał Sopot 2025! feat. Adizaster' },
      { id: 'prZV2-oydPI', title: 'Walka z wysokością!!! Zdobywamy Giewont' },
    ],
  },
];

// Wszyscy klienci i twórcy, bez powtórzeń, w kolejności pojawiania się
export const clients = [...new Set(projects.flatMap((p) => p.clients))];
