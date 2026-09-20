import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://cadernodoautonomo.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  integrations: [sitemap()],
});
