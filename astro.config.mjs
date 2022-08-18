import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";
import uno from "astro-uno";
import { extractorSvelte } from "@unocss/core";
import presetIcons from "@unocss/preset-icons";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [
    svelte(),
    tailwind(),
    uno({
      extractors: [extractorSvelte],
      presets: [presetIcons()],
    }),
  ],
  outDir: "build",
});
