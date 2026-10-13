import { defineConfig } from 'astro/config';

// GitHub Pages:
//  - repo "nazwa.github.io"  -> site: 'https://nazwa.github.io', base: '/'
//  - zwykłe repo "portfolio" -> site: 'https://nazwa.github.io', base: '/portfolio'
export default defineConfig({
  site: 'https://USERNAME.github.io',
  base: '/',
});
