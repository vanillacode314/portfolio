import { defineConfig } from 'astro/config'
import svelte from '@astrojs/svelte'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import compress from 'astro-compress'
import critters from 'astro-critters'
import compressor from 'astro-compressor'
import purgecss from 'astro-purgecss'
import image from '@astrojs/image'
import solidJs from '@astrojs/solid-js'
import Unocss from '@unocss/vite'
import { presetMini, presetUno, presetIcons } from 'unocss'

const darken = (shade, amount) => Math.min(shade + amount * 100, 900)
const lighten = (shade, amount) => Math.max(shade - amount * 100, 100)

const BASE_URL = 'https://raqueebuddinaziz.com'

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  site: BASE_URL,
  integrations: [
    image(),
    solidJs(),
    svelte(),
    sitemap({
      /* customPages: [BASE_URL + "/", BASE_URL + "/blog", ...getBlogs()], */
    }),
    robotsTxt(),
    /* purgecss(), */
    /* critters(), */
    compressor(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dark-plus',
    },
  },
  vite: {
    plugins: [
      Unocss({
        presets: [presetUno()],
        theme: {
          fontFamily: {
            sans: ['Archivo Narrow', 'sans-serif'],
            jet: ['JetBrains Mono', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace'],
          },
        },
        shortcuts: [
          // you could still have object style
          {
            btn: `py-3 px-5 font-semibold rounded-lg uppercase no-underline font-sans grid place-content-center cursor-pointer`,
          },
          // dynamic shortcuts
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
    ],
  },
})
