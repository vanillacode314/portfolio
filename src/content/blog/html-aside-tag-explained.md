---
title: 'HTML Aside Tag Explained'
description: 'Learn how to incorporate secondary content into your webpages in a SEO friendly way.'
seo:
  title: 'HTML Aside Tag Explained'
  description: 'Learn how to incorporate secondary content into your webpages in a SEO friendly way.'
  keywords: ['html', 'aside tag', 'explained', 'explainer', 'seo', 'guide']
author: raqueebuddinaziz
created: 'Jun 28, 2023'
---

Let's see how to use the aside tag to add secondary content to your webpages in a SEO friendly way.

## Aside doesn't mean only sidebar content

The tag name `aside` is used to add a secondary content to your webpages, it's not necessary for it to be a sidebar, it can be content adjacent to the main topic, an advertisement, or fun fact related to the main content sprinkled into your blog post.

The aside tag will not apply any styling, you are free to style it as a sidebar or a fun facts box or an advert etc.

### Example - Fun Facts

```html
<div style="display: flex; flex-direction: column; gap: 1.5rem">
	<main>Lobo is the main man</main>
	<aside style="padding: 1.5rem; background: black; color: white">
		Fun Fact: Lobo was meant to be a wolverine parody but it became so popular that DC decided to
		make him a mainstay character
	</aside>
</div>
```

<div class="border-2  border-black rounded-xl p-5">
  <div style="display: flex; flex-direction: column; gap: 1.5rem">
    <main>Lobo is the main man</main>
    <aside style="padding: 1.5rem; background: black; color: white">
      Fun Fact: Lobo was meant to be a wolverine parody but it became so popular that DC decided to
      make him a mainstay character
    </aside>
  </div>
</div>

### Example - Sidebar

```html
<div style="display: grid; grid-template-columns: 1fr 200px">
	<main>Lobo is the main man</main>
	<aside>
		<h4>Other Characters</h4>
		<ul>
			<li><a href="/superman">Superman</a></li>
			<li><a href="/batman">Batman</a></li>
		</ul>
	</aside>
</div>
```

<div class="border-2  border-black rounded-xl p-5">
  <div style="display: grid; grid-template-columns: 1fr 200px">
    <main>Lobo is the main man</main>
    <aside>
      <h4>Other Characters</h4>
      <ul>
        <li><a href="/superman">Superman</a></li>
        <li><a href="/batman">Batman</a></li>
      </ul>
    </aside>
  </div>
</div>

### Example - Advertisement

```html
<div style="display: flex; flex-direction: column; gap: 1.5rem">
	<main>Lobo is the main man</main>
	<aside style="padding: 1.5rem; background: #ca8a04; color: white">
		Buy the all new Lobo plushy
	</aside>
</div>
```

<div class="border-2  border-black rounded-xl p-5">
  <div style="display: flex; flex-direction: column; gap: 1.5rem">
    <main>Lobo is the main man</main>
    <aside style="padding: 1.5rem; background: #ca8a04; color: white">
      Buy the all new Lobo plushy
    </aside>
  </div>
</div>

## SEO Benefits

By marking secondary content with `aside` tag, search engines like google might choose to directly display it in the search results depending on the search. Which could lead to more clicks and then higher ranking on the search engine.

## Conclusion

There it is, now you have one more SEO trick under your web utility belt.

_Leave a comment down below if you have any questions!_
