---
title: Svelte Custom Stores Demystified
description: A complete guide to Custom Stores in Svelte with Examples
seo:
  title: Svelte Custom Stores Demystified
  description: A complete guide to Custom Stores in Svelte with Examples
  keywords: ['svelte', 'stores', 'custom stores', 'sveltekit']
author: raqueebuddinaziz
created: 'Sep 13, 2022'
---

Recently a fellow svelte dev asked me about custom stores, So here I am demystifying svelte stores.

The first half is an intro to svelte stores, feel free to skip to the [second half](#custom-stores) if you are already familiar with stores.

## What are stores anyway?

Lots of time when writing applications we might want to know when a certain value is changed and if we change the value we want to tell "everybody" that we changed it.
That is what a store helps us to do. Let's see how.

Let's not worry about the telling everybody about our changes part right now! We will come back to that [later](#telling-about-changes).

### Subscribing to changes

Let's say we have a `Store` object that has a method named `subscribe`. Here we have a user store that has properties `name` and `age`.
Now we might want to send the user a cool message when they turn 18, so we subscribe to changes to the user store.

The `$` in `$user` in the
<dfn>[callback](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)</dfn>
is just there to differentiate it from the actual `user` store.
`$user` refers to the actual object the store contains that is passed to the callback and `user` refers to the store wrapping the object.

We pass a callback function to the subscribe method of the `user` store and the store guarantees that whenever user object changes it will run that callback.

```javascript
const user = new Store({ name: 'John Doe', age: 18 })

user.subscribe(($user) => {
	if ($user.age === 18) {
		sendMessage(`Happy Birthday! ${$user.name}`)
	}
})
```

### Telling about changes

Now we will implement the `Store` object to tell every subscriber about any changes we make to the data in the store.

Let's think about how would we go about implementing something like this.

- We would need to store all the subscription callbacks.
  - Lets use an `Array` for this.
- We would need to store the value itself.
- We need to call all the callbacks whenever the value changes.
  - We can call all the callbacks in the `set` method.
  - Lets also call all the callbacks immediately in the `subscribe` method as we might want to check if the user is already 18 years of age.
- We need a way to unsubscribe to changes.
  - Lets return a `unsubscribe` function from our subscribe function that someone can call to unsubscribe.

```javascript
class Store {
	constructor(initialValue = null) {
		this.value = initialValue
		this.callbacks = []
	}

	subscribe(callback) {
		/* call the callback immediately on subscribe */
		callback(this.value)
		/* add the callback to list of callbacks */
		this.callbacks.push(callback)
		/* return a function to unsubscribe */
		return () => this.unsubscribe(callback)
	}

	unsubscribe(callback) {
		this.callbacks = this.callbacks.filter((cb) => cb !== callback)
	}

	set(value) {
		this.value = value
		/* call all the callbacks registered */
		for (const callback of this.callbacks) {
			callback(this.value)
		}
	}
}
```

There it is you just implemented the svelte `writable` store from scratch.
Although I am certain this is not the most performant implementation, but this is exactly what the svelte `writable` does on a high level.

## Custom Stores

Finally, what you are here for.
If you add any arbitrary logic in `subscribe`, `unsubscribe` or `set` method of the `Store` object we created you just created a custom store.
Get it? It's a store that does something custom somewhere in the store.

Let us look at some examples.

### Example #1 (Dark Mode Store)

```javascript
import { writable } from 'svelte/store'

function darkModeStore() {
	const darkMode = window.matchMedia('(prefers-color-scheme: dark)')

	/* set the value immediately in writable initialValue */
	const { set, subscribe, update } = writable(darkMode.matches)

	/* start listening to user preference changes and update the value */
	darkMode.addEventListener('change', () => set(darkMode.matches))

	return {
		subscribe
	}
}

const darkMode = darkModeStore()
```

This is a store whose value is `true` if user has dark mode on otherwise `false`.

You will see some new things here.
First we are not implementing `subscribe` and `set` ourselves rather we are getting it from the svelte `writable`, this is a common practice when writing custom stores as you probably don't want to implement those methods from scratch but extend their functionality.

Second we are returning only a `subscribe` function and no `set` function, this is legal and preferred if you want the store to be read only from the user's perspective, and in this case as the value of the store represents something that is outside our control like user preference we want the store to be read only.

### Example #2 (Runtime Type Checking)

```javascript
import { writable } from 'svelte/store'

function checkType(value, typeName) {
	if (typeof value !== typeName)
		throw new Error(`provided value ${value} has type ${typeof value} expected ${typeName}`)
}

function enforceType(initialValue, typeName) {
	checkType(initialValue, typeName)
	const { set, subscribe, update } = writable(initialValue)

	return {
		subscribe,
		set(value) {
			checkType(value, typeName)
			set(value)
		}
	}
}

const age = enforceType(18, 'number')
```

This is a store which takes two parameters an `initialValue` and a `typeName` and makes sure that the value of the store always has that type.
This particular implementation only works for
<dfn>[primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)</dfn> values.

Here we also return a `set` function that checks the type before updating the value of the store.

### Example #3 (Counter Store)

```javascript
function createCount() {
	const { subscribe, set, update } = writable(0)

	return {
		subscribe,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	}
}
```

This example I stole from the awesome [svelte tutorial](https://svelte.dev/tutorial/custom-stores).
It's a store that is something in between a `readable` store and a `writable` store.

It provides the required `subscribe` method but rather than providing a generic `set` method it provides `increment`, `decrement` and `reset` which allows modification of the value but restricts the modifications to three operations.

This is an extremely common pattern while writing svelte stores as this leads to better guarantees about the value stored leading to fewer chances for bugs down the line.

## Conclusion

So there it is custom stores demystified, now you have an amazing new tool in your arsenal to write apps.

_What will you use custom stores for? Leave a comment down below_
