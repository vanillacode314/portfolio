---
layout: '@layouts/Blog.astro'
title: 'A Comprehensive Guide to SolidJS Stores'
description: 'A comprehensive guide to solid-js stores, in depth explanation path syntax, mutable stores, produce, reconcile and more...'
seo:
  title: 'A Comprehensive Guide to SolidJS Stores'
  description: 'A guide on solid-js stores'
  keywords:
    [
      'solid',
      'solid-js',
      'solid-start',
      'state-management',
      'stores',
      'path syntax',
      'mutable stores',
      'produce',
      'reconcile',
    ]
author: raqueebuddinaziz
created: 'Jan 16, 2023'
---

This guide assumes you have been through [solidjs tutorial](https://www.solidjs.com/tutorial/introduction_basics) and are familiar with [mutable](https://developer.mozilla.org/en-US/docs/Glossary/Mutable) vs [immutable](https://developer.mozilla.org/en-US/docs/Glossary/Immutable) data types in javascript.

## Why stores?

Simply put for the most part it is just syntactic sugar that makes your life easier to gain full advantage of solid's fine-grained reactivity when using collection data types like objects and arrays.

Before stores were introduced you would need to wrap values in [signals](https://www.solidjs.com/docs/latest/api#createsignal) yourself like:

### Without stores

```tsx
const GET = 0
const SET = 1

function MyCompNoStore() {
  const [users, setUsers] = createSignal(
    [
      {
        id: createSignal(0),
        username: createSignal('johndoe420'),
        address: createSignal({
          city: createSignal('Mumbai'),
          country: createSignal('India'),
        }),
      },
      {
        id: createSignal(1),
        username: createSignal('janedoe420'),
        address: createSignal({
          city: createSignal('Tokyo'),
          country: createSignal('Japan'),
        }),
      },
    ].map((value) => createSignal(value))
  )

  return (
    <For each={users()}>
      {(user) => {
        const { id, address, username } = user[GET]()
        return (
          <div>
            id: {id[GET]()}
            username: {username[GET]()}
            city: {address[GET]().city[GET]()}
            country: {address[GET]().country[GET]()}
          </div>
        )
      }}
    </For>
  )
}
```

You might think that this is over wrapping, and we don't need to wrap every value/object/array in signals.
But if you think about it.

- We need to wrap the topmost array in case we fetch a new array from the server and need to replace the local one.
- Then we need to wrap the object at each index in case we need to swap any two indices which is very common in dashboards (even todomvc is a dashboard, so dashboards are not special cases they are very common in applications).
- Then we need to wrap each value in the object in signals if we want to have an edit user form.

The point is this is not over wrapping and each signal has a justified use case for existing in terms of achieving the most efficient path to fine-grained updates.

### With stores

```tsx
import { createStore } from 'solid-js/store'

function MyCompWithStores() {
  const [users, setUsers] = createStore([
    {
      id: 0,
      username: 'johndoe420',
      address: {
        city: 'Mumbai',
        country: 'India',
      },
    },
    {
      id: 1,
      username: 'janedoe420',
      address: {
        city: 'Tokyo',
        country: 'Japan',
      },
    },
  ])

  return (
    <For each={users}>
      {(user) => (
        <div>
          id: {user.id}
          username: {user.username}
          city: {user.address.city}
          country: {user.address.country}
        </div>
      )}
    </For>
  )
}
```

Now in the stores example. We just have a top level wrapper that is a store. All objects/arrays under a store are recursively wrapped in stores automatically and all values (numbers/strings/boolean etc...) are wrapped in signals automatically.

You might have noticed we don't destructure `id`, `username` and `address`. The reason being that the getter of the underlying signal is called at the time of accessing the property of a store. So if we destructure the user param like `{ id, username, address }`, the getter would be called and the subscription would be made at this level rather than when we actually use the values.

We can actually destructure `address` safely out of the user store without losing any fine-grained reactivity as `address` itself is a store so no getters would be called. You only need to worry about not destructuring before usage when the underlying value itself is wrapped in a signal (i.e numbers/strings/boolean/Sets/Maps etc...) and not wrapped in stores (i.e. objects/arrays). This is the reason why we could "destructure" each `user` out of the `users` array without losing fine-grained updates.

## Updating Stores

### Mutable Stores

So one thing we haven't talked about yet is how do we update data in our stores. Your first instinct would be to do something like:

```typescript
users[0].username = 'newusername'
```

But this doesn't work with "normal" stores for various reasons that deserves an article of its own, but I'll try to summarize the main point. Let's say you could do that, and then you pass the users store to another component/file through props/context/imports. Now that component/file can update the store even though your intention was only to let it read the value of `users`.

You might still want this syntax for convenience sometimes, or maybe you are just prototyping and don't care. For that reason there is a `createMutable` function that creates a store that can be set with assignments.

```typescript
const users = createMutable([
  {
    id: 0,
    username: 'johndoe420',
    address: {
      city: 'Mumbai',
      country: 'India',
    },
  },
  {
    id: 1,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
])
```

See how it doesn't return a `setUsers` function as you can just update the value by assignment.

### Path Syntax - Simple Key Value Updates

Okay so how do we update values if not through assignments. The `createStore` function returns a setter that can be used to update stores, the advantage of separating the getter and setter being that you can pick and choose when passing props/contexts/imports on who can get and who can set values leading to easier to debug code as you know who does what.

```tsx
const [users, setUsers] = createStore([
  {
    id: 0,
    username: 'johndoe420',
    address: {
      city: 'Mumbai',
      country: 'India',
    },
  },
  {
    id: 1,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
])

setUsers(0, 'username', 'newusername') // this is equivalent to users[0].username = 'newusername' if using normal objects/arrays
```

The syntax for setters is simple yet powerful. In the simplest case you can think of it just as accessing values like `object[key] = newValue` but instead of doing it with square brackets you pass the keys as function arguments and the last argument being the new value like `setStore(key, newValue)`.

And just like with nested objects and arrays you can chain square bracket keys you can do the same with store setters for e.g.

```typescript
users[0]['address']['city'] = 'Delhi'
// is equivalent to
setUsers(0, 'address', 'city', 'Delhi')`

```

This chaining of arguments as object keys is known as `path syntax` in solidjs docs. You can do much more with path syntax like `maps`, `filters`, `find` etc... Let's take a look at those syntaxes.

### Path Syntax - From, To, By for Arrays

Let's say you wanted to increment all id's by one. This is how you would do it.

```typescript
const [users, setUsers] = createStore([
  {
    id: 0,
    username: 'johndoe420',
    address: {
      city: 'Mumbai',
      country: 'India',
    },
  },
  {
    id: 1,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
  {
    id: 2,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
  {
    id: 3,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
  {
    id: 4,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
])

setUsers({ from: 0, to: users.length - 1 }, 'id', (id) => id + 1)
```

We see two new things here.

- First that you can pass a range to arrays instead of a single index using an object with keys `from` and `to`.
- Seconds that the setter can be a function instead of a value and the function is passed the old value.

Let's say you only want to increment only even indices. This is how you would do it.

```typescript
setUsers({ from: 0, to: users.length - 2, by: 2 }, 'id', (id) => id + 1)
```

The `by` key specifies how much should the index increment every time like a for loop. Notice that we do `users.length - 2` this time because our store has 5 items, so if did `users.length - 1` the counter would go 0, 2, 4, 6 and as we don't have a 6th user it would error out. This is exactly how for loops work as well, so it's easy to map this out in your mind.

You can also specify multiple keys using an array. Like:

```typescript
setUsers([0, 1, 5], 'id', (id) => id + 1)
```

Technically you can do this with objects too, although I can't think of any use case for that, I will still provide an example for completeness's sake.

```typescript
setUsers(
  0,
  'address',
  ['city', 'country'],
  'some-place-where-the-city-and-country-has-same-name'
)
```

### Path Syntax - Filtering Arrays

Now let's say we wanted to increment id of every use whose username starts with a j.
We can't simply do this with array indices or from/to syntax as we don't know ahead of time which users satisfy the condition.
For this use case you can pass in a function instead of a key as an argument which is equivalent to the [`Array.prototype.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method.
The function is passed the old value and index as the argument.
This is how you would do it.

```typescript
setUsers(
  (user, index) => user.username.startsWith('j'),
  'id',
  (id) => id + 1
)
```

You can also use this as a [`Array.prototype.find`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) alternative as a find is just a filter that returns the first value that satisfies the condition.

### Path Syntax - Appending to Arrays

To append to an array just set the new value at index `array.length`. For e.g.

```typescript
setUsers(users.length, {
  id: users.length,
  username: 'newuser',
  address: {
    city: 'DC',
    country: 'Marvel',
  },
})
```

### Path Syntax - Caveat, Updating Sets and Maps

When updating javascript [`Sets`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set) and [`Maps`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) inside a store you need to be careful as just mutating them would not trigger changes, you need to create a new reference each time you update them. For e.g.

```typescript
const [data, setData] = createStore({
  colors: new Set(['blue', 'red', 'green']),
  fruitsScore: new Map([
    ['apple', 1],
    ['banana', 2],
  ]),
})

// these would not work
setData('colors', (colors) => colors.add('yellow'))
setData('fruitsScore', (fruitsScore) => fruitsScore.set('apple', 420))

// do these instead
setData('colors', (colors) => {
  colors.add('yellow')
  return new Set(colors)
})

setData('fruitsScore', (fruitsScore) => {
  fruitsScore.set('apple', 420)
  return new Map(fruitsScore)
})
```

### Path Syntax - Caveat, Objects are shallow merged

One caveat to keep in mind when using store setters is that if a new value is an object it will be shallow merged with the old value automatically. For e.g.

```typescript
setUsers(0, {
  id: 69420,
})
// is equivalent to
setUsers(0, (user) => ({
  ...user, // the spread here is unnecessary as even without it solid would auto merge it anyways, it's here just to showcase the fact it auto merges using spreads.
  id: 69420,
}))
```

To completely remove a key from an object, set it to `undefined`.

```typescript
setUsers(0, {
  id: 69420,
  username: undefined,
})
```

## Utilities

### produce

The path syntax is powerful and is convenient to use in most cases, but sometimes it is convenient to think in terms of mutability, or it is more terse to write updates in a mutable fashion. To address this issue solid came up with the [`produce`](https://www.solidjs.com/docs/latest/api#produce) utility function which allows you to think in terms of mutability without all the downsides of using mutable stores. Let us see one scenario like that and see how `produce` make it cleaner. Let's try to change username and city of the first user in the store using with and without `produce`.

```typescript
import { batch } from 'solid-js'
import { createStore, produce } from 'solid-js/store'

const [users, setUsers] = createStore([
  {
    id: 0,
    username: 'johndoe420',
    address: {
      city: 'Mumbai',
      country: 'India',
    },
  },
  {
    id: 1,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
  {
    id: 2,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
  {
    id: 3,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
  {
    id: 4,
    username: 'janedoe420',
    address: {
      city: 'Tokyo',
      country: 'Japan',
    },
  },
])

// without produce
batch(() => {
  setUsers(0, 'username', 'newusername')
  setUsers(0, 'address', 'city', 'newcity')
})

// with produce
setUsers(
  0,
  produce((user) => {
    user.username = 'newusername'
    user.address.city = 'newcity'
  })
)
```

NOTE: produce only works with arrays/objects and not other collection types like javascript Sets and Maps.

### reconcile

The [`reconcile`](https://www.solidjs.com/docs/latest/api#reconcile) utility function basically does a recursive diff on the new value for you when using store setters. This is useful when you are not in control of the new value for e.g. the new value is an API Response or a value from a file imported by a user.

```typescript
import { createStore, reconcile } from 'solid-js/store'

const [data, setData] = createStore({
  colors: ['red', 'blue', 'orange'],
})

const userColors = getUserColors() // Lets say this is ["red", "blue", "orange". "black"]
setData('colors', reconcile(userColors))
```

This would auto diff the `userColors` and don't trigger updates for red, blue and orange and only trigger updates for black i.e. the value that changed.

### unwrap

The [`unwrap`](https://www.solidjs.com/docs/latest/api#unwrap) function can be used to convert a store to a normal object. Think of it like the opposite to `createStore`.

```typescript
import { createStore, unwrap } from 'solid-js/store'

const [data, setData] = createStore({
  colors: ['red', 'blue', 'orange'],
})

const rawData = unwrap(data)
```

## Conclusion

SolidJS stores are extremely powerful and cover all use cases you could encounter while dealing with complex state in an app plus you get the fine-grained updates. And with `createMutable` and `produce`, no matter where you stand on the mutability vs immutability spectrum, solid got you covered.

_Did I miss anything? What do you think about solid stores? Leave a comment down below_
