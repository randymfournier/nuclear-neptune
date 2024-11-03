import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://randymfournier.github.io',
  base: '/nuclear-neptune',
  integrations: [preact()]
});