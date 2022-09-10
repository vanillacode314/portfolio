import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  site: "https://raqueebuddinaziz.com",
  integrations: [svelte(), sitemap()],
  output: "server",
  adapter: netlify()
});