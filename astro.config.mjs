import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap'
import solidJs from '@astrojs/solid-js'
import compressor from 'astro-compressor'
import robots from 'astro-robots-txt'
import { defineConfig } from 'astro/config'
import fs from 'fs'
import { h } from 'hastscript'
import path from 'path'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeToc from 'rehype-toc'
import { presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import Unocss from 'unocss/astro'

import netlify from '@astrojs/netlify'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const directoryPath = path.join(__dirname, 'src', 'content', 'blog')
const files = fs.readdirSync(directoryPath)
const siteUrl = 'https://raqueebuddinaziz.com'
const blogUrls = files.map((file) => {
	const fileName = file.split('.')[0]
	return `${siteUrl}/blog/${fileName}/`
})

// https://astro.build/config
export default defineConfig({
	site: 'https://raqueebuddinaziz.com/',
	integrations: [
		Unocss({
			transformers: [transformerDirectives()],
			presets: [
				presetUno(),
				presetWebFonts({
					provider: 'bunny',
					fonts: {
						sans: ['Inter:400,500,600,700,800,900'],
						mono: ['JetBrains Mono', 'monospace']
					}
				}),
				presetIcons({
					extraProperties: {
						display: 'inline-block',
						'vertical-align': 'middle'
					}
				})
			],
			safelist: ['i-mdi-link-variant']
		}),
		solidJs(),
		sitemap({ customPages: blogUrls, changefreq: 'daily' }),
		// partytown({
		// 	config: {
		// 		forward: ['dataLayer.push']
		// 	}
		// }),
		robots(),
		compressor(),
		mdx()
	],
	markdown: {
		shikiConfig: {
			theme: 'dark-plus'
		},
		rehypePlugins: [
			rehypeHeadingIds,
			rehypeToc,
			[
				rehypeAutolinkHeadings,
				{
					content() {
						return [
							h('div.i-mdi-link-variant?bg.transition.hover:rotate-45.transform', {
								ariaHidden: true
							})
						]
					}
				}
			]
		]
	},
	output: 'server',
	adapter: netlify()
})
