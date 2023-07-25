import { createMediaQuery } from '@solid-primitives/media'
import { Show, createEffect, onMount, type VoidComponent } from 'solid-js'

export const AdUnit: VoidComponent = () => {
	const isMobile = createMediaQuery('(max-width: 1024px)')

	function initUnits() {
		if (!isMobile()) return
		const container = document.querySelector('.adsbygoogle')!
		const w = document.write
		document.write = function (content) {
			container.innerHTML = content
			document.write = w
		}
		const script = document.createElement('script')
		script.async = true
		script.crossOrigin = 'anonymous'
		script.src =
			'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3391473007789643'
		document.body.appendChild(script)
		;(window.adsbygoogle = window.adsbygoogle || []).push({})
	}
	createEffect(() => {
		isMobile()
		initUnits()
	})

	onMount(() => {
		initUnits()
	})

	return (
		<Show when={!isMobile()}>
			<ins
				class="adsbygoogle"
				style="display:block"
				data-ad-client="ca-pub-3391473007789643"
				data-ad-slot="5146394907"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
		</Show>
	)
}

export default AdUnit
