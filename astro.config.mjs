import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  site: "https://raqueebuddinaziz.com",
  integrations: [svelte(), sitemap()],
});
