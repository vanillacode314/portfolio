import { rehypeHeadingIds } from '@astrojs/markdown-remark'
import mdx from '@astrojs/mdx'
import netlify from '@astrojs/netlify'
import node from '@astrojs/node'
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
		sitemap({
			filter: (url) => {
				const $url = new URL(url)
				if (
					$url.pathname.startsWith('/blog') &&
					!$url.pathname.match(new RegExp(String.raw`^/blog/[0-9]{4}/[0-9]{2}/[0-9]{2}/`))
				)
					return false
				return true
			},
			changefreq: 'daily'
		}),
		partytown({
			config: {
				//debug: true,
				resolveUrl: function (url, location) {
					if (url.hostname === 'connect.facebook.net') {
						const proxyUrl = new URL(location.origin + '/partytown-proxy')
						proxyUrl.searchParams.set('url', url.href)
						return proxyUrl
					} else if (url.hostname === 'umami.raqueeb.com') {
						const proxyUrl = new URL(url)
						proxyUrl.hostname = 'authentic-strength-production.up.railway.app'
						proxyUrl.port = location.port
						proxyUrl.protocol = location.protocol
						proxyUrl.pathname = '/umami-proxy' + url.pathname
						return proxyUrl
					}
					return url
				},
				forward: ['dataLayer.push', 'fbq', 'umami.track']
				//logCalls: true,
				//logGetters: true,
				//logSetters: true,
				//logImageRequests: true,
				//logMainAccess: true,
				//logSendBeaconRequests: true,
				//logStackTraces: false,
				//logScriptExecution: true
			}
		}),
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
	adapter: node({
		mode: 'standalone'
	}),
	image: {
		service: {
			entrypoint: 'astro/assets/services/sharp',
			config: {
				limitInputPixels: false
			}
		}
	}
})
