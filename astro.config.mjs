import image from '@astrojs/image';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import solidJs from '@astrojs/solid-js';
import compressor from 'astro-compressor';
import robots from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { h } from 'hastscript';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc';
import { presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss';
import Unocss from 'unocss/astro';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://raqueebuddinaziz.com/',
  integrations: [image(), Unocss({
    transformers: [transformerDirectives()],
    presets: [presetUno(), presetWebFonts({
      fonts: {
        sans: ['Inter:400,500,600,700,800,900'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }), presetIcons({
      extraProperties: {
        'vertical-align': 'middle'
      }
    })],
    safelist: ['i-mdi-link-variant']
  }), solidJs(), sitemap(),
  // partytown({
  // 	config: {
  // 		forward: ['dataLayer.push']
  // 	}
  // }),
  robots(), compressor(), mdx()],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus'
    },
    rehypePlugins: [rehypeHeadingIds, rehypeToc, [rehypeAutolinkHeadings, {
      content() {
        return [h('div.i-mdi-link-variant?bg.transition.hover:rotate-45.transform', {
          ariaHidden: true
        })];
      }
    }]]
  }
});