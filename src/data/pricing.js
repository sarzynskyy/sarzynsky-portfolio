// Cennik. Zmieniasz liczby i teksty tutaj, strona /cennik przelicza się sama
// (cena za rolkę, ile taniej niż pojedyncza rolka).
//
// Psychologia, na której to stoi:
// 1. Kotwica: pojedyncza rolka jest celowo droga i pokazana jako pierwsza,
//    więc pakiety od razu wyglądają na okazję.
// 2. Efekt wabika: „Start” kosztuje niewiele mniej niż „Seria”, a daje o połowę mniej,
//    więc najbardziej opłaca się środkowy pakiet.
// 3. Efekt środka: polecany pakiet stoi pośrodku, jest wyróżniony i większy.
// 4. Cena za sztukę i „taniej o X%”: klient widzi konkretną oszczędność.

export const single = {
  name: 'Pojedyncza rolka',
  price: 1200,
  per: 'za rolkę',
  features: [
    '1 rolka do 60 s (9:16)',
    'Koncepcja i hook',
    'Zdjęcia do 2 h',
    'Montaż, napisy, kolor',
    '1 runda poprawek',
  ],
};

export const packages = [
  {
    id: 'start',
    name: 'Start',
    reels: 3,
    price: 2690,
    tagline: 'Na sprawdzenie formatu',
    features: [
      '3 rolki do 60 s (9:16)',
      'Koncepcja i hook do każdej rolki',
      'Dzień zdjęciowy do 4 h',
      'Montaż, napisy, color grading',
      'Muzyka z licencją',
      '1 runda poprawek',
      'Realizacja do 10 dni roboczych',
    ],
  },
  {
    id: 'seria',
    name: 'Seria',
    reels: 6,
    price: 3990,
    featured: true,
    badge: 'Polecany',
    tagline: 'Miesiąc regularnych publikacji',
    features: [
      '6 rolek do 60 s (9:16)',
      'Koncepcja i scenariusz każdej rolki',
      'Pełny dzień zdjęciowy do 8 h',
      'Montaż, napisy, color grading',
      'Muzyka z licencją',
      '2 rundy poprawek',
      'Plan publikacji: kolejność i opisy',
      'Realizacja do 14 dni roboczych',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    reels: 10,
    price: 5990,
    tagline: 'Dla marek, które publikują często',
    features: [
      '10 rolek do 60 s (9:16)',
      'Wszystko z pakietu Seria',
      '2 dni zdjęciowe',
      '10 zdjęć z planu do social mediów',
      'Priorytetowy termin realizacji',
    ],
  },
];

export const addons = [
  { name: 'Dodatkowa rolka', price: '450 zł' },
  { name: 'Ujęcia z drona', price: '400 zł' },
  { name: 'Wersja pozioma 16:9', price: '150 zł / rolka' },
  { name: 'Ekspres 72 h', price: '+30%' },
];

export const custom = {
  title: 'Film na YouTube, event, reklama?',
  text: 'Dłuższe formy wyceniam indywidualnie, po krótkiej rozmowie o celu, terminie i budżecie.',
};

export const faq = [
  {
    q: 'Jak wygląda współpraca?',
    a: 'Krótka rozmowa o celu i grupie odbiorców, potem koncepcje i scenariusze do akceptacji, dzień zdjęciowy, montaż i poprawki. Dostajesz gotowe pliki do publikacji.',
  },
  {
    q: 'Co jest potrzebne z Twojej strony?',
    a: 'Dostęp do miejsca zdjęć, osoba do kontaktu i akceptacja scenariuszy. Resztą zajmuję się ja.',
  },
  {
    q: 'Mogę zmienić pakiet w trakcie?',
    a: 'Tak. Jeśli w trakcie okaże się, że potrzebujesz więcej rolek, dopłacasz tylko różnicę między pakietami.',
  },
];
