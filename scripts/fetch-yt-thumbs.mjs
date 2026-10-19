// Pobiera miniatury filmów YouTube z projects.js do public/yt/<id>.webp
// przed buildem. Dzięki temu strona serwuje miniatury z własnego serwera
// i nie łączy się z YouTube, dopóki odwiedzający nie kliknie „odtwórz”.
import { mkdir, writeFile, access } from 'node:fs/promises';
import { projects } from '../src/data/projects.js';

const OUT = new URL('../public/yt/', import.meta.url);
const ID = /^[\w-]{11}$/; // format ID YouTube — nic innego nie trafi do URL-a

let sharp = null;
try { sharp = (await import('sharp')).default; } catch { /* bez sharp zapisujemy oryginalny JPG */ }

const ids = [...new Set(projects.flatMap((p) => (p.youtube || []).map((v) => v.id)))].filter((id) => ID.test(id));
await mkdir(OUT, { recursive: true });

async function get(id) {
  for (const name of ['maxresdefault', 'sddefault', 'hqdefault']) {
    const res = await fetch(`https://i.ytimg.com/vi/${id}/${name}.jpg`);
    if (res.ok) return Buffer.from(await res.arrayBuffer());
  }
  return null;
}

let ok = 0;
for (const id of ids) {
  const file = new URL(`${id}.webp`, OUT);
  try { await access(file); ok++; continue; } catch {}
  try {
    const buf = await get(id);
    if (!buf) { console.warn(`[yt] brak miniatury: ${id}`); continue; }
    // kadr 16:9 (sd/hq mają czarne pasy 4:3), max 1280 px szerokości, WebP
    const out = sharp
      ? await sharp(buf).resize(1280, 720, { fit: 'cover' }).webp({ quality: 74 }).toBuffer()
      : buf;
    await writeFile(file, out);
    ok++;
  } catch (e) {
    console.warn(`[yt] błąd ${id}: ${e.message}`);
  }
}
console.log(`[yt] miniatury: ${ok}/${ids.length}`);
