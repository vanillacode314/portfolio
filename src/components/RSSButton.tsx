import clsx from 'clsx'
import type { VoidComponent } from 'solid-js'

export const RSSButton: VoidComponent<{ class?: string }> = (props) => {
	return (
		<a
			href="/blog/rss.xml"
			target="_blank"
			class={clsx(
				'flex items-center gap-1 px-3 py-1 bg-orange-700 rounded text-white text-sm font-bold tracking-wide hover:bg-orange-500 focus:bg-orange-500 transition-colors',
				props.class
			)}
		>
			<span class="i-mdi-rss" />
			<span>RSS</span>
		</a>
	)
}

export default RSSButton
