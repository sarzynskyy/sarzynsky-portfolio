// Każdy projekt to jedna podstrona /work/<slug>.
// type: 'video' | 'photo'
// video: YouTube/Vimeo: wklej link do embeda (youtube.com/embed/ID lub player.vimeo.com/video/ID)
// photos: lista adresów zdjęć (najlepiej wrzucić do public/photos/... i podać '/photos/...')
const ph = (s) => `/photos/placeholder/${s}.jpg`; // przykładowe, podmień na swoje

export const projects = [
  {
    slug: 'maciek-duda-youtube',
    title: 'Maciek Duda YouTube',
    type: 'video',
    year: 2026,
    client: 'Maciek Duda · YouTube',
    role: 'Zdjęcia · Montaż · Produkcja',
    cover: '/yt/0qbRgEXaAto.webp',
    description:
      'Seria filmów z drogi Maćka do IRONMANA i innych sportowych wyzwań. Od 1/8 dystansu, przez połówkę w Gdyni, po pełnego Ironmana w Tallinnie. Do tego Runmageddon, maratony, rower przez całą Polskę i Giewont.',
    highlight: 'Ironman Tallinn: ok. 1 TB materiału i ponad 100 godzin montażu i produkcji.',
    // pierwszy film = główny (duży player na górze podstrony)
    youtube: [
      { id: '0qbRgEXaAto', title: 'Zostałem Ironmanem!!! [Tallin 2026]' },
      { id: 'OfqiBj4TIDM', title: 'Podjazdy mnie zmiażdżyły… (Ironman 70.3 Gdynia)' },
      { id: 'DTmH1yYfMp8', title: 'Przetrwałem 1/2 Ironman! (trudniejsze niż myślałem)' },
      { id: 'zYg_r5qTtX8', title: 'Zrobiłem życiówkę!!! [1/4 Ironman]' },
      { id: 'auqi3ONpz1Q', title: 'Zaczynam największe wyzwanie mojego życia!! [1/8 Ironman]' },
      { id: '_6zKvs7Lwv4', title: 'Jaki jest mój limit?! (VO2max & bike fitting)' },
      { id: '-YyfYTLpwWE', title: 'Przejechałem Polskę rowerem!! [z południa na północ]' },
      { id: 'OoEZxWh4frI', title: 'Ból, błoto i góry: Runmageddon Hardcore i Gravel' },
      { id: 'frbKCOPm0Hs', title: 'Runmageddon, czy to takie trudne?!' },
      { id: '_Ev48GCUOPw', title: 'Miałem łzy w oczach!! (Maraton Warszawski)' },
      { id: '3tC1sCYkmO8', title: 'Test siły przed maratonem!!!' },
      { id: 'h5ds17S8QkE', title: 'Nie sądziłem, że to będzie takie trudne!' },
      { id: 'S7GxZJhS9GI', title: 'To on wygrał Sopot 2025! feat. Adizaster' },
      { id: 'prZV2-oydPI', title: 'Walka z wysokością!!! Zdobywamy Giewont' },
    ],
  },
  {
    slug: 'nocna-zmiana',
    title: 'Nocna Zmiana',
    type: 'video',
    year: 2026,
    client: 'Music video',
    cover: ph('night'),
    embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    description: 'Teledysk kręcony w jedną noc na ulicach Krakowa. Neon, deszcz i ręczna kamera.',
    credits: ['Reżyseria / zdjęcia: Sarzynsky', 'Montaż i kolor: Sarzynsky'],
  },
  {
    slug: 'portrety-2026',
    title: 'Portrety 2026',
    type: 'photo',
    year: 2026,
    client: 'Personal',
    cover: ph('portrait'),
    description: 'Seria portretów w naturalnym świetle.',
    photos: [ph('p1'), ph('p2'), ph('p3'), ph('p4'), ph('p5'), ph('p6')],
  },
  {
    slug: 'brand-film',
    title: 'Brand Film',
    type: 'video',
    year: 2025,
    client: 'Commercial',
    cover: ph('brand'),
    embed: 'https://player.vimeo.com/video/76979871',
    description: 'Krótki film wizerunkowy dla lokalnej marki.',
    credits: ['Zdjęcia: Sarzynsky'],
  },
  {
    slug: 'backstage',
    title: 'Backstage',
    type: 'photo',
    year: 2025,
    client: 'Event',
    cover: ph('stage'),
    description: 'Za kulisami koncertów i eventów.',
    photos: [ph('b1'), ph('b2'), ph('b3'), ph('b4'), ph('b5')],
  },
];
