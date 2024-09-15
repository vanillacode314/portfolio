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
import Unocss from 'unocss/astro'

import netlify from '@astrojs/netlify'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const directoryPath = path.join(__dirname, 'src', 'content', 'blog')
const files = fs.readdirSync(directoryPath)

// https://astro.build/config
export default defineConfig({
	site: 'https://raqueeb.com/',
	integrations: [
		Unocss(),
		solidJs(),
		sitemap({ changefreq: 'daily' }),
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
					content(node) {
						return [
							h('span.hidden', `Read the ${node.children[0].value} section`),
							h('div.i-mdi-link-variant?bg.transition.hover:rotate-45.transform')
						]
					}
				}
			]
		]
	},
	output: 'hybrid',
	adapter: netlify({ imageCDN: false, cacheOnDemandPages: true }),
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
			config: {
				limitInputPixels: false
			}
		}
	}
})
