---
layout: '@layouts/Blog.astro'
title: How to type Events, Slots, and Props in Svelte
description: A guide on how to type events, slots, and props in svelte
seo:
  title: How to type Events, Slots, and Props in Svelte
  description: A guide on how to type events, slots, and props in svelte
  keywords:
    [
      'svelte',
      'typescript',
      'events',
      'slots',
      'props',
      'typing svelte components',
    ]
author: raqueebuddinaziz
created: 'Feb 01, 2023'
---

This guide assumes you have completed the [svelte tutorial](https://svelte.dev/tutorial/basics), and you have basic understanding of [typescript](https://www.typescriptlang.org/docs/handbook/).

## Setup

This is the component we will be typing throughout the guide.
It's a dialog component to confirm with either yes or no.

It has two props title and message plus we want to expose the same props as a dialog element through our component using `$$restProps` (rest props is a special svelte variable that contains all the props that were passed to the component that were not explicitly defined).

The component has a slot which exposes an `open` function through slot props.

The component will also have two events named `confirm` and `cancel`.

- `confirm` will be fired when the user explicitly presses either yes or no, and it will have a boolean as payload.
- `cancel` will be fired when the user uses `Escape` key to close the modal, and it will have no payload.

```svelte
<!-- Dialog.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  let dialogElement: HTMLDialogElement

  export let title
  export let message

  const dispatch = createEventDispatcher()
</script>

<dialog
  {...$$restProps}
  bind:this={dialogElement}
  on:keypress={(e) => {
    if (e.key === 'Escape') {
      dispatch('cancel')
    }
  }}
>
  <h1>{title}</h1>
  <button type="button" on:click={() => dispatch('confirm', true)}>Yes</button>
  <button type="button" on:click={() => dispatch('confirm', false)}>No</button>
</dialog>
<slot open={() => dialogElement.showModal()} />
```

## Props

### Explicit Props

Typing the props `title` and `message` is trivial, we can type them as we type `dialogElement` variable.

```svelte
<!-- Dialog.svelte -->
<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  let dialogElement: HTMLDialogElement

  export let title: string
  export let message: string

  const dispatch = createEventDispatcher()
</script>

<dialog
  {...$$restProps}
  bind:this={dialogElement}
  on:keypress={(e) => {
    if (e.key === 'Escape') {
      dispatch('cancel')
    }
  }}
>
  <h1>{title}</h1>
  <button type="button" on:click={() => dispatch('confirm', true)}>Yes</button>
  <button type="button" on:click={() => dispatch('confirm', false)}>No</button>
</dialog>
<slot open={() => dialogElement.showModal()} />
```

### RestProps ($$Props)

But typing the `$$restProps` is a little tricky, we need to use the special interface `$$Props` to type any props that we do not (for e.g. all the same props as a `<dialog>` element) or can not (for e.g. a prop named `class`) explicitly define using the export syntax.

```svelte
<!-- Dialog.svelte -->
<script lang="ts">
  import type { HTMLDialogAttributes } from 'svelte/elements'
  import { createEventDispatcher } from 'svelte'

  interface $$Props extends HTMLDialogAttributes {
    title: string
    message: string
  }

  let dialogElement: HTMLDialogElement

  export let title: string
  export let message: string

  const dispatch = createEventDispatcher()
</script>

<dialog
  {...$$restProps}
  bind:this={dialogElement}
  on:keypress={(e) => {
    if (e.key === 'Escape') {
      dispatch('cancel')
    }
  }}
>
  <h1>{title}</h1>
  <button type="button" on:click={() => dispatch('confirm', true)}>Yes</button>
  <button type="button" on:click={() => dispatch('confirm', false)}>No</button>
</dialog>
<slot open={() => dialogElement.showModal()} />
```

NOTE: You need to type the explicitly typed props in both places.

## Slots

Now let's type the slot prop `open`.
Similar to the `$$Props` interface there is a `$$Slots` interface which can be used to type slot props.
The keys are the name of the slot or `default` for the default slot and the value is an object which has the same shape as the `$$Props` interface.

```svelte
<!-- Dialog.svelte -->
<script lang="ts">
  import type { HTMLDialogAttributes } from 'svelte/elements'
  import { createEventDispatcher } from 'svelte'

  interface $$Props extends HTMLDialogAttributes {
    title: string
    message: string
  }

  interface $$Slots {
    default: {
      open: () => void
    }
  }

  let dialogElement: HTMLDialogElement

  export let title: string
  export let message: string

  const dispatch = createEventDispatcher()
</script>

<dialog
  {...$$restProps}
  bind:this={dialogElement}
  on:keypress={(e) => {
    if (e.key === 'Escape') {
      dispatch('cancel')
    }
  }}
>
  <h1>{title}</h1>
  <button type="button" on:click={() => dispatch('confirm', true)}>Yes</button>
  <button type="button" on:click={() => dispatch('confirm', false)}>No</button>
</dialog>
<slot open={() => dialogElement.showModal()} />
```

## Events

Now let's type the custom events, so we always have to pass a `boolean` payload if we dispatch `confirm` event and no payload when we dispatch `cancel` event.
Similar to the `$$Props` and `$$Slots` interface there is a `$$Events` interface which can be used to type events.
The keys are the name of the event and the value is `CustomEvent` with the shape `CustomEvent<PayloadType>`.
We also need to type the dispatch functions separately, we can use a mapped typescript type to extract the dispatcher type from the `$$Events` interface.

```svelte
<!-- Dialog.svelte -->
<script lang="ts">
  import type { HTMLDialogAttributes } from 'svelte/elements'
  import { createEventDispatcher } from 'svelte'

  interface $$Props extends HTMLDialogAttributes {
    title: string
    message: string
  }

  interface $$Slots {
    default: {
      open: () => void
    }
  }

  interface $$Events {
    confirm: CustomEvent<boolean>
    cancel: CustomEvent<never>
  }

  type Dispatcher<TEvents extends Record<keyof TEvents, CustomEvent<any>>> = {
    [Property in keyof TEvents]: TEvents[Property]['detail']
  }

  let dialogElement: HTMLDialogElement

  export let title: string
  export let message: string

  const dispatch = createEventDispatcher<Dispatcher<$$Events>>()
</script>

<dialog
  {...$$restProps}
  bind:this={dialogElement}
  on:keypress={(e) => {
    if (e.key === 'Escape') {
      dispatch('cancel')
    }
  }}
>
  <h1>{title}</h1>
  <button type="button" on:click={() => dispatch('confirm', true)}>Yes</button>
  <button type="button" on:click={() => dispatch('confirm', false)}>No</button>
</dialog>
<slot open={() => dialogElement.showModal()} />
```

## Conclusion

`Slots`, `Events` and `Props` constitute all the ways you can interact with a component externally, so by typing them you improve the dev experience and help prevent bugs.

_Leave a comment down below if you found this useful._
