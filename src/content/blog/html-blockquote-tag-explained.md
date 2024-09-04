---
title: 'HTML Blockquote Tag Explained'
description: 'Learn how to properly include quotes in your websites using the blockquote tag in an SEO friendly and accessible way'
seo:
  title: 'HTML Blockquote Tag Explained'
  description: 'Learn how to properly include quotes in your websites using the blockquote tag in an SEO friendly and accessible way'
  keywords:
    ['html', 'guide', 'explainer', 'explained', 'quotes', 'seo', 'accessibility', 'blockquote tag']
author: raqueebuddinaziz
created: 'Jul 17, 2023'
---

You can use the `blockquote` tag to include quotes in your HTML in a SEO friendly and accessible way.
You can also use the `cite` tag to provide citations for the quote.

## Usage

```html
<figure>
	<blockquote>This blog is awesome, Gotta leave an awesome comment</blockquote>
	<figcaption>
		<cite>- Everybody</cite>
	</figcaption>
</figure>
```

<div class="p-5 rounded-xl border border-black">
	<figure>
		<blockquote>This blog is awesome, Gotta leave an awesome comment</blockquote>
		<figcaption>
			<cite>- Everybody</cite>
		</figcaption>
	</figure>
</div>

You can also provide a URL for the citation using the `cite` attribute of the `blockquote` tag.
This will help search engines in indexing your content and linking citations directly.

```html
<figure>
	<blockquote cite="https://raqueeb.com/blog/html-blockquote-tag-explained">
		This blog is awesome, Gotta leave an awesome comment
	</blockquote>
</figure>
```

<div class="p-5 rounded-xl border border-black">
	<figure>
	<blockquote cite="https://raqueeb.com/blog/html-blockquote-tag-explained">
			This blog is awesome, Gotta leave an awesome comment</blockquote>
	</figure>
</div>

Note that it has no visual effect, it's completely a semantic thing to provide a cite URL so that search engines can work better with your content.

## Styling

You can style `blockquote` tags just like any other tag

```html
<figure>
	<blockquote
		style="padding:.75rem; background-color: #ddd; border-radius: 0 .5rem .5rem 0; border-left: 4px solid maroon"
	>
		This blog is awesome, Gotta leave an awesome comment
	</blockquote>
</figure>
```

<div class="p-5 rounded-xl border border-black">
	<figure>
		<blockquote style="padding:.75rem; background-color: #ddd; border-radius: 0 .5rem .5rem 0; border-left: 4px solid maroon">
			This blog is awesome, Gotta leave an awesome comment
		</blockquote>
	</figure>
</div>

## Difference b/w blockquote tag and q tag

```html
<figure>
	<blockquote
		style="padding:.75rem; background-color: #ddd; border-radius: 0 .5rem .5rem 0; border-left: 4px solid maroon"
	>
		This blog is awesome, Gotta leave an awesome comment
	</blockquote>
</figure>
<p>Everybody said <q>This blog is the most awesome blog I have ever read</q>.</p>
```

<div class="p-5 rounded-xl border border-black">
	<figure>
		<blockquote
    	style="padding:.75rem; background-color: #ddd; border-radius: 0 .5rem .5rem 0; border-left: 4px solid maroon"
    		>This blog is awesome, Gotta leave an awesome comment</blockquote>
    </figure>
    <p class="!mb-0">Everybody said <q>This blog is the most awesome blog I have ever read</q>.</p>
</div>

The `blockquote` tag is used to incorporate large quotes that are not inline with other content, whereas the `q` tag can be used to include and mark inline quotes.

## Benefits of using blockquote tag over other tags for quotes

By using the `blockquote` tag with the `cite` attribute or the `cite` tag gives more semantic meaning to the content on your website which makes it easier for robots like search engines and screen readers to understand your content, which leads to better SEO and Accessibility.

## Conclusion

There it is the `blockquote` tag, it's a simple one as it has a clearly defined use-case.
You want to include a large quote in your website? Then use the `blockquote` tag.

_Leave an awesome comment down below_
