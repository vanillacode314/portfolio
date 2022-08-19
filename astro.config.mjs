import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import uno from "astro-uno";
import { extractorSvelte } from "@unocss/core";
import presetIcons from "@unocss/preset-icons";
// import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://raqueebuddinaziz.com",
  experimental: {
    integrations: true,
  },
  integrations: [
    svelte(),
    tailwind(),
    uno({
      extractors: [extractorSvelte],
      presets: [presetIcons()],
    }),
    sitemap(),
    // compress({
    //   path: "./build",
    // }),
  ],
  outDir: "build",
});
