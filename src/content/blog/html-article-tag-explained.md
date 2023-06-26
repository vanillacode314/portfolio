---
title: 'HTML Article Tag Explained'
description: 'Explainer on when to use article tag and how you can improve SEO and Accessibility using it'
seo:
  title: 'HTML Article Tag Explained'
  description: 'Explainer on when to use article tag and how you can improve SEO and Accessibility using it'
  keywords: ['html', 'article tag', 'seo', 'accessibility', 'explainer', 'guide', 'explained']
author: raqueebuddinaziz
created: 'Jun 26, 2023'
---

`article` tag has a simple purpose, to divide your page into semantic independent parts.

It is a bit subjective when to use and when not to use the `article` but let's see some common places and rule of thumbs for when to use and when not to use the `article` tag.

## When to use article tag

A good rule of thumb when you should use an `article` tag is when you think the part that you wanna wrap in an `article` tag can be used and made sense of without everything else on the page. Some examples are:

- **Blog Post**: You can wrap a blog post in an `article` tag as a blog post will make sense even if taken out of your site.

```html
<article>
	<header>
		<h1>HTML Article Tag Explained</h1>
	</header>
	<p>
		Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
		cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
		consectetur cupidatat.
	</p>
</article>
```

- **Comments**: You can wrap a comments in an `article` tag as a comment will make sense even if taken out of your site for example to cite in another blog post / video / newspaper.

```html
<article>
	<figure>
		<blockquote>Gotta say this article is kinda fire XD</blockquote>
	</figure>
	<figcaption>- Raqueebuddin Aziz</figcaption>
</article>
```

- **Blog Post Card**: Similar to a whole article, someone can also take a blog post card and put it on another website and it would still make sense.

```html
<article>
	<img src="/assets/images/blog/html-article-tag-explained.webp" alt="HTML Article Tag Explained" />
	<header>
		<h3>HTML Article Tag Explained</h3>
	</header>
	<p>Explainer on when to use article tag and how you can improve SEO and Accessibility using it</p>
</article>
```

- **Image**: Think of instagram and pinterest, each image can be wrapped in an `article` tag as each image can be used without everything else on the page and still make sense.

```html
<article>
	<img src="/assets/images/blog/html-article-tag-explained.webp" alt="HTML Article Tag Explained" />
</article>
```

Another good rule of thumb is to think of would you want this independent piece shown on search results for SEO purposes.

For example a comment might be a good thing to wrap in an `article` tag on reddit as they would want it to show on search results but it might be better for instagram to wrap their images in `article` tag instead of comments as that's what they would want shown in search results and not necessarily comments.

Let us see when not to use `article` tag.

## When not to use article tag

- Don't try to divide everything into a semantic independent part using the `article` tag even if it can be taken out of your site and made sense of,
  you should only use the `article` tag on parts that would actually be useful to take out of your site or be useful to assistive technologies like screen readers.

### Examples

#### Overwrapping

```html
<article>
	<figure>
		<article>
			<blockquote>Gotta say this article is kinda fire XD</blockquote>
		</article>
	</figure>
	<article>
		<figcaption>- Raqueebuddin Aziz</figcaption>
	</article>
</article>
```

In the above example technically yes you can wrap the quote, author and the whole comment in `article` tag independently, but it's not useful a quote without a author or an author without a quote.

## SEO Benefits

By wrapping relevant independent content in an `article` tag you give search engines the ability to showcase that information directly inside the search results for example comments from reddit or images from pinterest.

## Conclusion

`article` tag is used for semantic purposes similar to how `div` tag is used for styling purposes.
It's a bit hard to decide when and when not to use the `article` tag but if you use the rule of thumbs above you will be fine.

_Leave a comment down below, if you learned something new today :)_
