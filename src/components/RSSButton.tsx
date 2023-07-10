import type { VoidComponent } from 'solid-js'

export const RSSButton: VoidComponent = () => {
	return (
		<a
			href="/blog/rss.xml"
			target="_blank"
			class="flex items-center gap-1 px-3 py-1 bg-orange-700 rounded text-white text-sm font-bold tracking-wide"
		>
			<span class="i-mdi-rss" />
			<span>RSS</span>
		</a>
	)
}

export default RSSButton
