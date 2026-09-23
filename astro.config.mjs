import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nullableninja.github.io/Task-Karate-Web/',
  base: '/Task-Karate-Web',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'directory'
  }
});
