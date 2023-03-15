---
title: "3 Patterns to Write Declarative, More Readable SolidJS Components"
description: "This posts explains how to write more readable declarative components"
seo:
  title: "3 Patterns to Write Better and More Readable SolidJS Components"
  description: "This posts explains how to write more readable declarative components"
  keywords:
    [
      "solidjs",
      "solid",
      "declarative",
      "components",
      "patterns",
      "patterns to write better and more readable solidjs components",
      "async",
      "await",
      "iterators",
      "lists",
      "list like",
      "slots",
    ]
author: raqueebuddinaziz
created: "Mar 15, 2023"
---

The three patterns we will be seeing today are inspired by the [`Switch`](https://www.solidjs.com/docs/latest/api#switchmatch) component from solid-js.
I was poking around the solid-js repo to figure out how the switch component works as it uses children instead of props to pass data to itself.

This guide assumes you have gone through the [solidjs tutorial](https://www.solidjs.com/tutorial/introduction_basics), and that you have basic typescript knowledge.

## List Like Components

This pattern can be used for any component where you want to pass an array of data and render a child template.
The example I will be using here is a `Tabs` component.

Your first instinct might be to create a component and pass the tabs as props with an interface like this.

### Verbose and Less Readable Version

```tsx
interface Props {
  tabs: Array<{
    title: string;
    content: JSXElement;
  }>;
}

export const Tabs: Component<Props> = (props) => {
  const [activeTab, setActiveTab] = createSignal<number>(0);

  return (
    <div>
      <ul>
        <For each={props.tabs}>
          {({ title }, index) => (
            <li>
              <button onClick={() => setActiveTab(index())}>{title}</button>
            </li>
          )}
        </For>
      </ul>
      <div>{props.tabs[activeTab()].content}</div>
    </div>
  );
};
```

This approach works perfectly in terms of mechanics but the code when using this component looks ugly and verbose.

```tsx
export const App: Component = () => {
  return (
    <Tabs
      tabs={[
        {
          title: "Tab 1",
          content: "Tab 1",
        },
        {
          title: "Tab 2",
          content: "Tab 2",
        },
        {
          title: "Tab 3",
          content: "Tab 3",
        },
        {
          title: "Tab 4",
          content: "Tab 4",
        },
      ]}
    />
  );
};
```

### More Readable Version

Wouldn't it be cool if we can just do something like:

```tsx
export const App: Component = () => {
  return (
    <Tabs>
      <Tab title="Tab 1">Tab 1</Tab>
      <Tab title="Tab 2">Tab 2</Tab>
      <Tab title="Tab 3">Tab 3</Tab>
      <Tab title="Tab 4">Tab 4</Tab>
    </Tabs>
  );
};
```

This is so much cleaner and readable than the previous example.
Let's build our `Tabs` component to look like this.

```tsx
import { children, Component, createSignal, For, JSXElement } from "solid-js";

interface TabsProps {
  children: JSXElement;
}

export const Tabs: Component<TabsProps> = (props) => {
  const [activeTab, setActiveTab] = createSignal<number>(0);

  const tabs = children(() => props.children);
  const evaluatedTabs = () => tabs.toArray() as unknown as TabProps[];

  return (
    <div>
      <ul>
        <For each={evaluatedTabs()}>
          {({ title }, index) => (
            <li>
              <button onClick={() => setActiveTab(index())}>{title}</button>
            </li>
          )}
        </For>
      </ul>
      <div>{evaluatedTabs()[activeTab()].children}</div>
    </div>
  );
};

interface TabProps {
  title: string;
  children: JSXElement;
}
export const Tab: Component<TabProps> = (props) => {
  return props as unknown as JSXElement;
};
```

The trick is to use the `children` prop as a proxy to get the relevant props. We pass the props from the `Tab` component directly by casting it as JSXElement.

And then in our `Tabs` component we evaluate the children, convert it to an array and recast it back to an array of `TabProps`.

This is the trick I learned from the `Switch` component implementation in solid-js core.

## Declarative Slots

Let's look at another usage of this trick.
In this pattern we want to pass multiple `JSXElement` to a component and render them in different places.

Traditionally one would do this simply by passing the elements as props to the component.

### Traditional Example

```tsx
interface Props {
  header: JSXElement;
  children: JSXElement;
}

export const Section: Component<SectionProps> = (props) => {
  return (
    <section>
      <header>{props.header}</header>
      <div>{props.children}</div>
    </section>
  );
};
```

```tsx
export const App: Component = () => {
  return <Section header={<h3>My Heading</h3>}>My Content</Section>;
};
```

### Alternative Example

Using our trick we can create a `Slot` component and pass that as children.

```tsx
import { children, Component, createComputed, JSXElement, on } from "solid-js";
import { createStore } from "solid-js/store";

export const getSlots = (_children: JSXElement) => {
  const parts = children(() => _children);
  const [slots, setSlots] = createStore<Record<string, JSXElement>>({});
  createComputed(
    on(parts, () => {
      for (const part of parts.toArray() as unknown as SlotProps[]) {
        if (!part.name) {
          setSlots("default", part);
          continue;
        }
        setSlots(part.name, () => part.children);
      }
    })
  );
  return slots;
};

interface SectionProps {
  children: JSXElement;
}

export const Section: Component<SectionProps> = (props) => {
  const slots = getSlots(props.children);

  return (
    <section>
      <header class="bg-black text-white p-5">{slots.header}</header>
      <div class="p-5">{slots.default}</div>
    </section>
  );
};

interface SlotProps {
  name: string;
  children: JSXElement;
}
export const Slot: Component<SlotProps> = (props) => {
  return props as unknown as JSXElement;
};
```

The `getSlots` function parses the children and returns a store which contains the name of the `Slot` as the key and the children of the `Slot` as the value.

Any children not wrapped in a `Slot` is given the name default this makes it so we don't have to pass a `Slot` even if there is only one children we want to pass.

### Usage

```tsx
export const App: Component = () => {
  <Section>
    <Slot name="header">
      <h3>My Header</h3>
    </Slot>
    My Content
  </Section>;
};
```

This seems more natural to me. But it's completely fine to use the props pattern instead of the slot pattern if you prefer that.

## Async Blocks

The goto way to handle async components in solid-js is by using [`Suspense`](https://www.solidjs.com/docs/latest/api#suspense), [`ErrorBoundary`](https://www.solidjs.com/docs/latest/api#errorboundary), [`Show`](https://www.solidjs.com/docs/latest/api#show) and [`createResource`](https://www.solidjs.com/docs/latest/api#createresource).

A typical component looks like this.

### Traditional Example

```tsx
export const Async: Component = () => {
  const [data] = createResource(() =>
    fetch(`https://pokeapi.co/api/v2/pokemon/ditto`).then((res) => res.json())
  );

  return (
    <Suspense fallback="Loading...">
      <ErrorBoundary fallback="Oops! An Error Occurred">
        <Show when={data()}>{data()}</Show>
      </ErrorBoundary>
    </Suspense>
  );
};
```

### Alternative Example

We can make it a little bit more nicer to use with our slot pattern.

```tsx
import {
  Component,
  JSXElement,
  Suspense,
  createResource,
  Show,
  ErrorBoundary,
} from "solid-js";
import { Slot, getSlots } from "./Slots";

interface AsyncProps<T> {
  promise: Promise<T>;
  children: JSXElement | ((data: T) => JSXElement);
}

export const Async: <T>(props: AsyncProps<T>) => JSXElement = <T,>(
  props: AsyncProps<T>
) => {
  const slots = getSlots(props.children);
  const then = slots.default as (data: T) => JSXElement;
  const [data] = createResource(
    () => props.promise,
    () => props.promise
  );

  return (
    <Suspense fallback={slots.await}>
      <ErrorBoundary fallback={slots.catch}>
        <Show when={data()}>{then(data()!)}</Show>
      </ErrorBoundary>
    </Suspense>
  );
};

export const Await: Component<{ children: JSXElement }> = (props) => {
  return <Slot name="await">{props.children}</Slot>;
};

export const Catch: Component<{ children: JSXElement }> = (props) => {
  return <Slot name="catch">{props.children}</Slot>;
};
```

### Usage

```tsx
interface Pokemon {
  name: string;
}

export default function App() {
  const getPokemon = async (name: string): Promise<Pokemon> =>
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
      res.json()
    );

  return (
    <Async promise={getPokemon("ditto")}>
      <Await>Loading...</Await>
      <Catch>Error :(</Catch>
      {(pokemon) => pokemon.name}
    </Async>
  );
}
```

## Conclusion

This whole blog post was inspired by poking around in solid-js core repo.

I was under the impression that I am not smart enough to understand the core code in solid-js, turns out it was a good idea to do it regardless of my fears because I was wrong.

I encourage you to poke around in codebases of software and libraries you use, who knows what might come out of it.

_Which pattern is your favourite? Leave a comment down below_
