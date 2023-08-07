---
title: 'Svelte Context Module Scripts Explained'
description: 'A guide on context modules scripts inside svelte components and when to use them'
seo:
  title: 'Svelte Context Module Scripts Explained'
  description: 'A guide on context modules scripts inside svelte components and when to use them'
  keywords: ['svelte', 'scripts', 'context module', 'svelte components']
author: raqueebuddinaziz
created: 'Aug 4, 2023'
---

This guide assumes you are familiar with how JS <a href="https://developer.mozilla.org/en-US/docs/Glossary/Scope" target="_blank">scopes</a> and <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules" target="_blank">modules</a> work and have completed the <a href="https://learn.svelte.dev" target="_blank">svelte tutorial</a>.

## The Setup

This is a simple hello world svelte component that you and I will be walking through to see how script `context=module` works.

<span id="code-example-1"></span>

```svelte
<!-- HelloWorld.svelte -->

<!-- OUTER SCOPE STARTS -->
<script context="module">
  import { writable } from 'svelte/store'

  let message = 'world!'
  const count = writable(0)

  setInterval(() => {
    count.update(c => c + 1)
  }, 1000)
</script>

<!-- INNER SCOPE STARTS -->
<script>
  $: console.log($count)
</script>

<p>hello {message}</p>
<button on:click={() => $count = 0}>Reset Count</button>
<!-- INNER SCOPE ENDS -->
<!-- OUTER SCOPE ENDS -->
```

## What a Svelte Component File Looks Like In JS

Let's see what a svelte component roughly would look like if it was written in JS to understand how `context=module` script works.

<span id="code-example-2"></span>

```js
// HelloWorld.js

// OUTER SCOPE STARTS
import { writable } from 'svelte/store'

let message = 'world!'
const count = writable(0)

setInterval(() => {
	count.update((c) => c + 1)
}, 1000)

// @SVELTE-COMPILE
export const HelloWorld = () => {
	// INNER SCOPE STARTS
	$: console.log($count)

	return html`
		<p>hello ${message}</p>
		<button on:click="${() => ($count = 0)}">Reset Count</button>
	`
	// INNER SCOPE ENDS
}

export default HelloWorld
// OUTER SCOPE ENDS
```

## What Are The Differences Between context=module And Non context=module Script Tags?

- The code inside `context=module` scripts only run once, no matter how many times you use a component.
- You cannot use any variables/imports defined inside the normal script tag inside `context=module` script tag. You can do it the other way round though.
- You cannot use svelte syntax including but not limited to dereferencing stores by prefixing `$` to their name or creating reactive variables using `let` in `context=module` script tags.

## Why Does context=module code only runs once but normal script tags runs per component usage?

Because the global scope (`context=module` in svelte files) is only run on the first import of a module, but the component function (the normal script tag and the html) is executed every time a component is used.

## Why Can I Not Access Non context=module Script Variables Inside Context=Module Script?

Look at the [svelte example code above](#code-example-1) and then compare the scopes to the [js example code above](#code-example-2).

See how all the non `context=module` script variables are inside the inner scope aka inside the function thus variables defined inside a function cannot be used outside it.

The outside of the function in the `.js` file corresponding to the `context=module` script in the `.svelte` file.

## Why Does Svelte Syntax Only Work In Non context=module Scripts?

You would have noticed that you cannot use any svelte specific syntax in `context=module` scripts like `$: console.log($count)`, `setInterval(() => $count++, 1000)`.
Instead we have to write pure JS inside `context=module` scripts.

The reason for this is everything inside the normal script tag inside a svelte component runs through the svelte compiler to transform the svelte specific syntax into pure JS syntax.
Look at the `@SVELTE-COMPILE` line in [js example code above](#code-example-2). This compilation doesn't happen for the `context=module` script.

The next question you might have is why not run the outer scope (`context=module` script) through a compiler too and let you use the svelte specific syntax in `context=module` scripts? Some of the reasons are

- Svelte Syntax overrides some JS syntax, so if you do really want to use JS syntax then `context=module` not supporting svelte syntax is great.
  For e.g. if you want to define a variable that's not reactive you can do that in `context=module` scripts using the `let x = 1` syntax.
- In the outer scope you can export variables and functions that other files can import. And analyzing svelte syntax across multiple files is extremely hard.

## Conclusion

The `context=module` script tag is an escape hatch so you can break out into the global scope of the current module as with normal script tags you are contained within a function scope and cannot do things you can do in a global scope like exporting variables and functions, running code once per component and sharing state across multiple usage of the same component.

_Leave a comment down below if you have any questions!_
