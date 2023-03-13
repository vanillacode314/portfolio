---
title: "State Management in Solid JS"
description: "A guide on state management in solid js"
seo:
  title: "State Management in Solid JS"
  description: "A guide on state management in solid js"
  keywords: ["solid", "solid-js", "solid-start", "state-management"]
author: raqueebuddinaziz
created: "Oct 17, 2022"
---

A guide on state management in a solid-js application.
I will be using solid-start in this guide for convenience but all these concepts can be applied to any solid-js project.

This guide assumes you have gone through the [solidjs tutorial](https://www.solidjs.com/tutorial/introduction_basics).

## Sharing State

This is the one of the easiest thing to do in solid-js. Define a [signal](https://www.solidjs.com/docs/latest/api#createsignal) or [store](https://www.solidjs.com/docs/latest/api#using-stores) in an external file and import it into your components and all the components will have the same state and any changes will be propagated to all the components.

### Example

```javascript
/* src/state/index.js */
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [count, setCount] = createSignal(0);
const [appState, setAppState] = createStore({
  title: "My Awesome App",
  user: {
    name: "John Doe",
    age: Infinity,
  },
});

export const useAppState = () => [appState, setAppState];
export const useCount = () => [count, setCount];
```

```javascript
/* src/components/Counter.jsx */
import { useCount } from "~/state";

export function Counter() {
  const [count, setCount] = useCount();

  return <div>{count()}</div>;
}
```

```javascript
/* src/components/Increment.jsx */
import { useCount } from "~/state";

export function Increment() {
  const [count, setCount] = useCount();

  return (
    <button onClick={() => setCount(count() + 1)}>Make the count go up</button>
  );
}
```

```javascript
/* src/routes/index.jsx */
import { Counter } from "~/components/Counter";
import { Increment } from "~/components/Increment";

export default function Home() {
  return (
    <>
      <Counter />
      <Increment />
    </>
  );
}
```

In the example above even though the `Increment` and `Counter` components are separate, pressing the `Increment` component will still increment the visible count in the `Counter` component because both components use the same signal from `src/state/index.js`.

## Mutations

You can just write a function in the state file and import it in other files, and then you have centralized mutations.

### Example

```javascript
/* src/state/index.js */
import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [count, setCount] = createSignal(0);
export const incrementCount = () => setCount(count() + 1);

const [appState, setAppState] = createStore({
  title: "My Awesome App",
  user: {
    name: "John Doe",
    age: Infinity,
  },
  setTitle(val) {
    setAppState("title", val);
  },
});

export const useAppState = () => [appState, setAppState];
export const useCount = () => [count, setCount];
```

```javascript
/* src/components/Increment.jsx */
import { incrementCount } from "~/state";

export function Increment() {
  return <button onClick={() => incrementCount()}>Make the count go up</button>;
}
```

```javascript
/* src/routes/index.jsx */
import { Counter } from "~/components/Counter";
import { Increment } from "~/components/Increment";
import { useAppState } from "~/state";

export default function Home() {
  const [appState, setAppState] = useAppState();
  setTimeout(() => appState.setTitle("More awesome app"), 4000);

  return (
    <>
      <div>{appState.title}</div>
      <Counter />
      <Increment />
    </>
  );
}
```

## Async State

[`Suspense`](https://www.solidjs.com/docs/latest/api#suspense) and [`createResource`](https://www.solidjs.com/docs/latest/api#createresource) are your best friends while working with async state.

Define a resource in the state file and any relevant mutations and optionally (but highly recommended) when using the value wrap it in a `Suspense` to show a loading state.

### Example

```javascript
/* src/state/index.js */
import { createResource, createSignal } from "solid-js";
import { createStore } from "solid-js/store";

const [count, setCount] = createSignal(0);
export const incrementCount = () => setCount(count() + 1);

const [appState, setAppState] = createStore({
  title: "My Awesome App",
  user: {
    name: "John Doe",
    age: Infinity,
  },
  setTitle(val) {
    setAppState("title", val);
  },
});

const [pokemon, { refetch }] = createResource((_, { refetching: name }) =>
  fetch(`https://pokeapi.co/api/v2/pokemon/${name || "ditto"}`).then((res) =>
    res.json()
  )
);

export const useAppState = () => [appState, setAppState];
export const useCount = () => [count, setCount];
export const usePokemon = () => [pokemon, refetch];
```

```javascript
/* src/routes/index.jsx */
import { createEffect, createSignal, Suspense } from "solid-js";
import { Counter } from "~/components/Counter";
import { Increment } from "~/components/Increment";
import { usePokemon, useAppState } from "~/state";

export default function Home() {
  const [appState, setAppState] = useAppState();
  const [pokemon, fetchPokemon] = usePokemon();
  const [query, setQuery] = createSignal("");
  setTimeout(() => appState.setTitle("More awesome app"), 4000);

  return (
    <>
      <div>{appState.title}</div>
      <Counter />
      <Increment />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetchPokemon(query());
        }}
      >
        <input
          onInput={(e) => setQuery(e.currentTarget.value)}
          value={query()}
          required
        />
      </form>
      <Suspense fallback={<div>loading...</div>}>
        <span>{pokemon()?.name || "Not Found"}</span>
        <img src={pokemon()?.sprites.front_default} />
      </Suspense>
    </>
  );
}
```

## Conclusion

Truth be told solid-js is a state management library that happens to render.

_How do you like to manage state in your applications? Leave a comment down below_
