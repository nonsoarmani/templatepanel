import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://templatepanel.com',
  // Cloudflare Pages expects a static deployment
  output: 'static'
});
