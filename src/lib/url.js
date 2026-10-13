// Dokleja base (np. /portfolio) do lokalnych ścieżek zaczynających się od "/"
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (p) => (p && p.startsWith('/') ? BASE + p : p);

// Link "oglądaj" z adresu embeda YouTube / Vimeo
export const watchUrl = (embed) => {
  const yt = embed.match(/youtube\.com\/embed\/([\w-]+)/);
  if (yt) return `https://www.youtube.com/watch?v=${yt[1]}`;
  const vm = embed.match(/player\.vimeo\.com\/video\/(\d+)/);
  if (vm) return `https://vimeo.com/${vm[1]}`;
  return embed;
};
