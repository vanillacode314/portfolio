import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";
import {
  transformerDirectives,
  presetUno,
  presetWebFonts,
  presetIcons,
} from "unocss";

// https://astro.build/config
export default defineConfig({
  integrations: [
    Unocss({
      transformers: [transformerDirectives()],
      presets: [
        presetUno(),
        presetWebFonts({
          fonts: {
            sans: ["Inter:400,500,600,700,800,900"],
          },
        }),
        presetIcons(),
      ],
    }),
  ],
});
