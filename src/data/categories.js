// Kategorie prac (filtr na /prace). Kolejność = kolejność przycisków.
export const categories = [
  { id: 'sport', label: 'Sport' },
  { id: 'motoryzacja', label: 'Motoryzacja' },
  { id: 'reklama', label: 'Reklama i social media' },
  { id: 'eventy', label: 'Eventy' },
];

export const categoryLabel = (id) => categories.find((c) => c.id === id)?.label ?? id;

// Formaty wyliczane z materiałów projektu
export const formatsOf = (p) =>
  [p.youtube?.length && 'YouTube', p.reels?.length && 'Rolki', p.photos?.length && 'Zdjęcia'].filter(Boolean);
