import { onMount, createSignal, Component } from 'solid-js'
import { makeEventListener } from '@solid-primitives/event-listener'

export const Background: Component = () => {
  const [progress, setProgress] = createSignal<number>(0)

  onMount(() => {
    makeEventListener(window, 'scroll', () => {
      setProgress(
        document.scrollingElement.scrollTop /
          (document.scrollingElement.scrollHeight -
            document.scrollingElement.clientHeight)
      )
    })
  })

  return (
    <div
      class="pointer-events-none fixed inset-0 -z-10 container"
      style={{ '--progress': progress() * 100 + '%' }}
    >
      <div
        class="absolute rounded-lg w-60 h-60 hidden md:block rotate-[60deg] opacity-10 blur translate-y-[var(--progress)]"
        style={{
          'background-color': 'var(--color-3)',
          top: '20%',
          left: '0',
        }}
      />
      <div
        class="absolute rounded-lg w-60 h-60 rotate-[60deg] opacity-10 blur translate-y-[var(--progress)]"
        style={{
          'background-color': 'var(--color-4)',
          top: '-200px',
          right: '0',
        }}
      />
      <div
        class="absolute rounded-lg w-60 h-60 rotate-[60deg] opacity-10 blur translate-y-[var(--progress)]"
        style={{
          'background-color': 'var(--color-2)',
          top: '50%',
          right: '0',
        }}
      />
    </div>
  )
}
