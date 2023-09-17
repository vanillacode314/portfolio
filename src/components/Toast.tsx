import { For, type Component } from 'solid-js'
import { messages } from './toast'

type MessageType = 'info' | 'success' | 'warning' | 'error'

const colorMap = {
	info: 'bg-blue-500',
	warning: 'bg-yellow-500',
	error: 'bg-red-500',
	success: 'bg-green-500'
} satisfies Record<MessageType, string>

export const ToastComp: Component = () => (
	<div class="fixed bottom-0 right-0 p-5">
		<For each={messages}>
			{({ type, title, content, icon, dismiss }) => (
				<div class={`p-5 rounded-lg ${colorMap[type]} max-w-xs`} onClick={dismiss}>
					<div class="flex flex-col gap-1 items-start">
						<span class="font-bold uppercase text-xs flex gap-3 items-center">
							{icon && <div class={`${icon} text-base`}></div>}
							{title}
						</span>
						{content && <span class="whitespace-pre-line">{content}</span>}
					</div>
				</div>
			)}
		</For>
	</div>
)
