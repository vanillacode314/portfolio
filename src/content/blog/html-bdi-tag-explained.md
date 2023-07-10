---
title: 'HTML BDI Tag Explained'
description: 'Learn how to use the bdi tag to incorporate bidirectional text in your HTML in an accessible and SEO friendly way'
seo:
  title: 'HTML BDI Tag Explained'
  description: 'Learn how to use the bdi tag to incorporate bidirectional text in your HTML in an accessible and SEO friendly way'
  keywords:
    [
      'html',
      'bdi tag',
      'seo',
      'accessibility',
      'guide',
      'explainer',
      'explained',
      'bidirectional text'
    ]
author: raqueebuddinaziz
created: 'Jul 10, 2023'
---

The <abbr>`bdi`</abbr> (bi-directional isolate) tag can be used to help the browser with rendering bidirectional text when it fails to do so automatically.

## The Issue it solves

```html
<!-- Works good in LTR -->
<p>Hello World - 1st</p>
<!-- Works bad in RTL -->
<p>مرحبا بالعالم - 1st</p>
```

<div class="px-5 rounded-xl border border-black">
  <p>Hello World - 1st</p>
  <p>مرحبا بالعالم - 1st</p>
</div>

In the above example (even the code example you see is messed up because it's being rendered by the browser) you can see the browser is having a hard time figuring out where the RTL text starts and ends and that is because the characters `-`, `<space>` and `1` are either neutral or weak in their default direction. In cases like these you can use the `bdi` tag to help out the browser and contain the directionality.

## Fixing the issue

```html
<p><bdi>Hello World</bdi> - 1st</p>
<p><bdi>مرحبا بالعالم</bdi> - 1st</p>
```

<div class="px-5 rounded-xl border border-black">
  <p><bdi>Hello World</bdi> - 1st</p>
  <p><bdi>مرحبا بالعالم</bdi> - 1st</p>
</div>

Here you will see the rendering is fixed (notice the rendering of the code example is fixed too) because we specify the start and end of the bidirectional text using the `bdi` tag.

In this example we didn't need to wrap the english `Hello World` with the `bdi` tag but it's good for consistency.

## Conclusion

There it is the problem the `bdi` tag solves and how it solves it.

_Leave a comment down below, if you have any questions!_
