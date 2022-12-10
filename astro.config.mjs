import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import compressor from 'astro-compressor'
import image from '@astrojs/image'
import solidJs from '@astrojs/solid-js'
import Unocss from 'unocss/astro'
import { extractorSvelte, presetUno } from 'unocss'

const BASE_URL = 'https://raqueebuddinaziz.com'

/* UTILS */
const darken = (shade, amount) => Math.min(shade + amount * 100, 900)
const lighten = (shade, amount) => Math.max(shade - amount * 100, 100)

// https://astro.build/config
export default defineConfig({
  site: BASE_URL,
  integrations: [
    Unocss({
      extractors: [extractorSvelte],
      presets: [presetUno()],
      theme: {
        fontFamily: {
          sans: ['Archivo Narrow', 'sans-serif'],
          jet: ['JetBrains Mono', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
      },
      shortcuts: [
        {
          btn: `py-3 px-5 font-semibold rounded-lg uppercase no-underline font-sans grid place-content-center cursor-pointer`,
        },
        [
          /^btn-ghost-(.*)$/,
          ([, p]) => {
            const [c, shade] = p.split('-')
            return shade
              ? `text-${c}-${shade} bg-transparent hover:bg-${c}-${lighten(
                  +shade,
                  1
                )} focus:bg-${c}-${lighten(
                  +shade,
                  1
                )} hover:text-white focus:text-white transition-colors`
              : `text-${c} bg-transparent`
          },
        ],
        [
          /^btn-secondary-(.*)$/,
          ([, p]) => {
            const [c, shade] = p.split('-')
            return shade
              ? `text-${c}-${shade} border-${c}-${shade} border-2 bg-transparent hover:border-${c}-${lighten(
                  +shade,
                  1
                )} focus:border-${c}-${lighten(
                  +shade,
                  1
                )} hover:text-${c}-${lighten(+shade, 1)} focus:text-${c}-${
                  +shade - 100
                } transition-colors`
              : `text-${c} border-${c} border-2 bg-transparent`
          },
        ],
        [
          /^btn-primary-(.*)$/,
          ([, p]) => {
            const [c, shade] = p.split('-')
            return shade
              ? `bg-${c}-${shade} text-white border-none hover:bg-${c}-${lighten(
                  +shade,
                  1
                )} focus:bg-${c}-${lighten(+shade, 1)} transition-colors`
              : `bg-${c} text-white border-none`
          },
        ],
      ],
    }),
    image(),
    solidJs(),
    svelte(),
    sitemap({
      /* customPages: [BASE_URL + "/", BASE_URL + "/blog", ...getBlogs()], */
    }),
    robotsTxt(),
    compressor(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    },
  },
})
