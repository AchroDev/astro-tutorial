// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://earnest-beignet-b23b87.netlify.app/",
  integrations: [preact()]
});