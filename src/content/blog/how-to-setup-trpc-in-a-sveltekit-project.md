---
title: 'How to setup tRPC in a SvelteKit project'
description: 'This guide will walk you through everything you need to know to get started with tRPC in a SvelteKit project.'
seo:
  title: 'How to setup tRPC in a SvelteKit project'
  description: 'This guide will walk you through everything you need to know to get started with tRPC in a SvelteKit project.'
  keywords: ['svelte', 'typescript', 'trpc', 'zod', 'sveltekit', 'tRPC']
author: raqueebuddinaziz
created: 'Apr 15, 2023'
---

<!-- Intro -->

In this guide we will be adding tRPC to a new SvelteKit project, all these steps can also be used to add tRPC to an existing SvelteKit project.

## Setup

To start create a new SvelteKit project and install `@trpc/server`, `@trpc/client` and `zod`.

```fish
npm create svelte@latest my-sveltekit-project-with-trpc
cd my-sveltekit-project-with-trpc
npm install @trpc/server @trpc/client zod
```

## Creating the server

We will be creating the tRPC server in `src/lib/server` folder in the new SvelteKit project.

### Context

- Create a file named `context.ts` in `src/lib/server` folder with the following contents.

```typescript
// src/lib/server/context.ts
import { initTRPC } from '@trpc/server'
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch'

export const createSvelteKitContext = (locals: App.Locals) => (opts: FetchCreateContextFnOptions) =>
	locals

const t = initTRPC.context<ReturnType<typeof createSvelteKitContext>>().create()
export const router = t.router
export const publicProcedure = t.procedure
```

- We create a function to help us pass SvelteKit's [`App.Locals`](https://kit.svelte.dev/docs/types#app-locals) server context to tRPC server.
- Then we create a tRPC instance that is specific to our context thus giving us type completions in our tRPC server for our SvelteKit locals.
- Finally, we export the `router` and `publicProcedure` methods so we can use them in our router next.

### Router

- Create a file named `router.ts` in `src/lib/server` folder.

```typescript
// src/lib/server/router.ts
import { z } from 'zod'
import { router, publicProcedure } from './context'

export const appRouter = router({
	greet: publicProcedure
		.input(
			z.object({
				name: z.string()
			})
		)
		.query(({ ctx, input }) => {
			return `Hello ${input.name}`
		})
})

export type AppRouter = typeof appRouter
```

- We import our `router` and `publicProcedure` from the `context.ts` file and `z` from [`zod`](https://zod.dev) for input validation for our `procedures/endpoints`.
- We create a `greet` endpoint that takes an object as an input of form `{ name: string }` and returns a string with a greeting.
- We export both `appRouter` and it's type `AppRouter`. The reason we export the type independently, so we don't have to import our server code in the client when we create our tRPC client later.

## Serving the server in our SvelteKit app

Now we need to serve the trpc server on our SvelteKit app.
To do this we will be creating a catchall route `/api/trpc/[...procedure]` so all requests under `/api/trpc/` are handled by our tRPC server.

```typescript
// src/routes/api/trpc/[...procedure]/+server.ts
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from '$lib/server/router'
import { createSvelteKitContext } from '$lib/server/context'
import type { RequestHandler } from '@sveltejs/kit'

export const GET = ((event) =>
	fetchRequestHandler({
		req: event.request,
		router: appRouter,
		endpoint: '/api/trpc',
		createContext: createSvelteKitContext(event.locals)
	})) satisfies RequestHandler

export const POST = ((event) =>
	fetchRequestHandler({
		req: event.request,
		router: appRouter,
		endpoint: '/api/trpc',
		createContext: createSvelteKitContext(event.locals)
	})) satisfies RequestHandler
```

- We import the `fetchRequestHandler` from `@trpc/server/adapters/fetch` to pass the request object to then we import our `appRouter` we created in the last step and pass that to the `fetchRequestHandler` as well, so it can recognize the greet procedure we defined.
- We also import the `createSvelteKitContext` helper we created in the last step so that we can pass our SvelteKit locals to our tRPC server.
- Finally, we register the `GET` and `POST` handlers and pass all the data to the tRPC `fetchRequestHandler`.

## Creating the client

Let's create the tRPC client in `src/lib/trpc.ts` file.

```typescript
// src/lib/trpc.ts
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from './server/router'

export const trpc = createTRPCProxyClient<AppRouter>({
	links: [
		httpBatchLink({
			url: '/api/trpc'
		})
	]
})
```

- We import our `AppRouter` type and pass it to the `createTRPCProxyClient`, so we can get autocompletions in our tRPC client when we use it to call our `endpoints/procedures`.
- Finally, we export the `trpc` client, so we can use it throughout our app.

## Using the client

Let's see how to use everything we built till now.
We will create a simple index page that will have an input where we type our name and the server responds with a greeting.

```svelte
<!-- src/routes/+page.svelte -->
<script lang="ts">
	import { trpc } from '$lib/trpc';

	let name: string = '';
	let output: string = '';
	$: name ? trpc.greet.query({ name }).then((value) => (output = value)) : (output = '');
</script>

<input bind:value={name} />
<p>{output}</p>
```

- We import our client define 2 reactive values `name` and `output` register a side effect that calls the greeting method with our `name` when it changes and if name is empty string then we just set the output to an empty string rather than call the tRPC server.
- Lastly, we bind the `name` to an input and showcase the output in a `p` tag.

You are not limited to using the client in `.svelte` files, you can use them anywhere in your project including but not limited to `+layout.ts`, `+layout.server.ts`, `+page.ts`, `+page.server.ts` and other `+server.ts` files.

## Conclusion

Setting up tRPC for the first time in a sveltekit project might seem daunting and seem like a chore but it is worth the effort to get less bugs and that sweet autocompletion.
Plus you only need to do it once after that it's just copy and paste.

_Leave a comment down below if you have any questions or found this guide helpful._
