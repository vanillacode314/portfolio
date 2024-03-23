import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives } from 'unocss'

export default defineConfig({
	content: { filesystem: ['src/**/*.{astro,md,mdx,svelte,[tj]sx}'] },
	transformers: [transformerDirectives()],
	presets: [
		presetUno(),
		presetWebFonts({
			provider: 'bunny',
			fonts: {
				sans: ['Ubuntu:400,500,600,700,800,900'],
				mono: ['Ubuntu Mono', 'monospace']
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
})
