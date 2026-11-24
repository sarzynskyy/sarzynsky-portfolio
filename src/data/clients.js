// Pasek „Pracowałem z” na stronie głównej.
// logo: plik w public/logos (białe SVG, pobrane z oficjalnych stron marek lub z materiałów z realizacji).
// Bez logo: nazwa jako napis (twórcy z Instagrama: ikona i @nazwa). href: opcjonalnie link do projektu na tej stronie.
// h: wysokość logo w px (optyczne wyrównanie: szerokie logo niżej, wysokie wyżej)
export const clientLogos = [
  { name: 'BMW i MINI Grupa Dobrzański', logo: '/logos/dobrzanski.svg', h: 38 },
  { name: 'Dr Witt', logo: '/logos/drwitt.svg', h: 38 },
  { name: 'Duda', logo: '/logos/duda.svg', h: 40 },
  { name: 'Bergmen', logo: '/logos/bergmen.svg', h: 18 },
  { name: 'Apartamenty Królewska Huta', logo: '/logos/krolewska-huta.png', h: 56 },
  { name: 'AnyCar', logo: '/logos/anycar.svg', h: 20 },
  // ig: twórca z Instagrama, pokazywany jako ikona Instagrama i @nazwa
  { name: 'Dudaily', ig: 'dudaily', href: '/prace/ironman-tallinn' },
];
