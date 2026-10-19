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
    description: 'Pełny dystans IRONMAN w Tallinnie, od przygotowań po metę. Film dla kanału Maćka Dudy.',
    highlight: 'Ok. 1 TB materiału i ponad 100 godzin montażu i produkcji.',
    youtube: [{ id: '0qbRgEXaAto', title: 'Zostałem Ironmanem!!! [Tallin 2026]' }],
  },
  {
    slug: 'anytaxi',
    title: 'AnyTaxi',
    clients: ['AnyTaxi'],
    category: 'reklama',
    year: 2025,
    role: 'Zdjęcia · Montaż',
    featured: true,
    cover: '/reels/anytaxi/anytaxi-rozpoczecie-pracy.webp',
    description:
      'Seria rolek rekrutacyjnych dla krakowskiej firmy taksówkarskiej. Krótkie, szybkie formy na social media, które miały przyciągnąć nowych kierowców.',
    reels: [
      reel('anytaxi', 'anytaxi-praca-dla-studenta', 'Praca dla studenta'),
      reel('anytaxi', 'anytaxi-rozpoczecie-pracy', 'Pierwszy dzień'),
      reel('anytaxi', 'anytaxi-kierowca', 'Skąd ta Toyota?'),
      reel('anytaxi', 'anytaxi-boost', 'Zostaw kontakt'),
    ],
  },
  {
    slug: 'droga-do-ironmana',
    title: 'Droga do Ironmana',
    clients: ['Maciek Duda'],
    category: 'sport',
    role: 'Zdjęcia · Montaż · Produkcja',
    featured: true,
    cover: '/yt/OfqiBj4TIDM.webp',
    description:
      'Kolejne etapy przygotowań: 1/8, 1/4 i 1/2 dystansu, IRONMAN 70.3 Gdynia oraz badanie VO2max z bike fittingiem.',
    youtube: [
      { id: 'OfqiBj4TIDM', title: 'Podjazdy mnie zmiażdżyły… (Ironman 70.3 Gdynia)' },
      { id: 'auqi3ONpz1Q', title: 'Zaczynam największe wyzwanie mojego życia!! [1/8 Ironman]' },
      { id: 'zYg_r5qTtX8', title: 'Zrobiłem życiówkę!!! [1/4 Ironman]' },
      { id: 'DTmH1yYfMp8', title: 'Przetrwałem 1/2 Ironman! (trudniejsze niż myślałem)' },
      { id: '_6zKvs7Lwv4', title: 'Jaki jest mój limit?! (VO2max & bike fitting)' },
    ],
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
