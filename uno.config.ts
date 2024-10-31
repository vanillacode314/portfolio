import presetWebFonts from '@unocss/preset-web-fonts'
import { createLocalFontProcessor } from '@unocss/preset-web-fonts/local'
import { defineConfig, presetIcons, presetUno, transformerDirectives } from 'unocss'

export default defineConfig({
	content: { filesystem: ['src/**/*.{astro,md,mdx,svelte,[tj]sx}'] },
	transformers: [transformerDirectives()],
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: ['Ubuntu:400,500,600,700,800,900', 'sans-serif'],
				mono: ['Ubuntu Mono', 'monospace']
			},
			processors: createLocalFontProcessor({
				// Directory to cache the fonts
				cacheDir: 'node_modules/.cache/unocss/fonts',

				// Directory to save the fonts assets
				fontAssetsDir: 'public/assets/fonts',

				// Base URL to serve the fonts from the client
				fontServeBaseUrl: '/assets/fonts'
			})
		}),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle'
			}
		})
	],
	safelist: ['i-mdi-link-variant']
})
