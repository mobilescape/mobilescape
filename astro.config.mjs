import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mobilescape.github.io',
  base: '/mobilescape/',
  build: {
    format: 'directory',
  },
});
