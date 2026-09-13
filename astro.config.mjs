import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TROQUE pela URL final do seu domínio antes do primeiro deploy.
// O sitemap.xml e as tags canônicas dependem deste valor.
const SITE_URL = 'https://SEU-DOMINIO-AQUI.com.br';

export default defineConfig({
  site: SITE_URL,
  integrations: [sitemap()],
});
