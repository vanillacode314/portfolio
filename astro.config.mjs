import { defineConfig } from "astro/config";
import Unocss from "unocss/astro";
import {
  transformerDirectives,
  presetUno,
  presetWebFonts,
  presetIcons,
} from "unocss";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import { h } from "hastscript";
import rehypeToc from "rehype-toc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import solidJs from "@astrojs/solid-js";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://raqueebuddinaziz.com/",
  integrations: [
    image(),
    Unocss({
      transformers: [transformerDirectives()],
      presets: [
        presetUno(),
        presetWebFonts({
          fonts: {
            sans: ["Inter:400,500,600,700,800,900"],
            mono: ["JetBrains Mono", "monospace"],
          },
        }),
        presetIcons({
          extraProperties: {
            "vertical-align": "middle",
          },
        }),
      ],
      safelist: ["i-mdi-link-variant"],
    }),
    solidJs(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: "dark-plus",
    },
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeToc,
      [
        rehypeAutolinkHeadings,
        {
          content() {
            return [
              h(
                "div.i-mdi-link-variant?bg.transition.hover:rotate-45.transform",
                {
                  ariaHidden: true,
                }
              ),
            ];
          },
        },
      ],
    ],
  },
});
