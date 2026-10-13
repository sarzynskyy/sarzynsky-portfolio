// Każdy projekt to jedna podstrona /work/<slug>.
// type: 'video' | 'photo'
// video: YouTube/Vimeo — wklej link do embeda (youtube.com/embed/ID lub player.vimeo.com/video/ID)
// photos: lista adresów zdjęć (najlepiej wrzucić do public/photos/... i podać '/photos/...')
const ph = (s) => `/photos/placeholder/${s}.jpg`; // przykładowe — podmień na swoje

export const projects = [
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
