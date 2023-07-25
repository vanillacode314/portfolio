import { createMediaQuery } from '@solid-primitives/media'
import { Show, type VoidComponent } from 'solid-js'

export const AdUnit: VoidComponent = () => {
	const isMobile = createMediaQuery('(max-width: 1024px)')

	return (
		<Show when={isMobile()}>
			<script
				async
				src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3391473007789643"
				crossorigin="anonymous"
			></script>
			<ins
				class="adsbygoogle"
				style="display:block"
				data-ad-client="ca-pub-3391473007789643"
				data-ad-slot="5146394907"
				data-ad-format="auto"
				data-full-width-responsive="true"
			></ins>
			<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
		</Show>
	)
}

export default AdUnit
