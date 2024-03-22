import { WindowEventListener } from '@solid-primitives/event-listener'
import clsx from 'clsx'
import { createSignal, type Component } from 'solid-js'

export const Background: Component = () => {
	const [progress, setProgress] = createSignal<number>(0)
	const baseClass =
		'absolute rounded-lg size-144 hidden md:block rotate-[60deg] opacity-5 blur-[1000px] translate-y-[var(--progress)]'

	return (
		<>
			<WindowEventListener
				onScroll={() => {
					const el = document.scrollingElement!
					setProgress(el.scrollTop / (el.scrollHeight - el.clientHeight))
				}}
			/>
			<div class="fixed -z-20 bg-white inset-0"></div>
			<div
				class="pointer-events-none fixed inset-0 -z-10 max-w-6xl mx-auto"
				style={{ '--progress': progress() * -100 + '%' }}
			>
				<div
					class={clsx(baseClass, 'bg-orange-600')}
					style={{
						top: '20%',
						left: '-20%'
					}}
				/>
				<div
					class={clsx(baseClass, 'bg-green-600')}
					style={{
						top: '-200px',
						right: '-20%'
					}}
				/>
				<div
					class={clsx(baseClass, 'bg-blue-600')}
					style={{
						top: '70%',
						right: '0'
					}}
				/>
			</div>
		</>
	)
}
