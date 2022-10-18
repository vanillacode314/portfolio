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
            btn: `py-3 px-5 font-semibold rounded-lg uppercase no-underline hover:underline focus:underline font-sans grid place-content-center cursor-pointer`,
          },
          // dynamic shortcuts
          [
            /^btn-secondary-(.*)$/,
            ([, p]) => {
              const [c, shade] = p.split('-')
              return shade
                ? `text-${c}-${shade} border-${c}-${shade} border-2 bg-transparent hover:border-${c}-${
                    +shade - 100
                  } focus:border-${c}-${+shade - 100} hover:text-${c}-${
                    +shade - 100
                  } focus:text-${c}-${+shade - 100} transition-colors`
                : `text-${c} border-${c} border-2 bg-transparent`
            },
          ],
          [
            /^btn-primary-(.*)$/,
            ([, p]) => {
              const [c, shade] = p.split('-')
              return shade
                ? `bg-${c}-${shade} text-white border-none hover:bg-${c}-${
                    +shade - 100
                  } focus:bg-${c}-${+shade - 100} transition-colors`
                : `bg-${c} text-white border-none`
            },
          ],
        ],
      }),
    ],
  },
})
