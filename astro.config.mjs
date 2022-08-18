import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

import tailwind from "@astrojs/tailwind";
import Unocss from "@unocss/vite";
import { extractorSvelte } from "@unocss/core";
import presetIcons from "@unocss/preset-icons";

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte(), tailwind()],
  outDir: "build",
  vite: {
    plugins: [
      Unocss({
        extractors: [extractorSvelte],
        presets: [presetIcons()],
      }),
    ],
  },
});
