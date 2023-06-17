---
title: 'HTML Abbr Tag Explained'
description: 'Explainer on how to use abbr tag to improve your websites accessibility'
seo:
  title: 'HTML Abbr Tag Explained'
  description: 'Explainer on how to use abbr tag to improve your websites accessibility'
  keywords: ['html', 'abbr', 'explained', 'guide', 'explainer', 'abbreviation']
author: raqueebuddinaziz
created: 'Jun 17, 2023'
---

Let us see how to use the `abbr` tag to write more accessible webpages.

## Marking words as abbreviation

```html
<abbr>HTML</abbr> (Hyper Text Markup Language) is one of the primary languages used to write
webpages on the internet.
```

In the code snippet above we are marking `HTML` as an abbreviation.
By marking it as an abbreviation accessibility apps like screen readers can potentially announce that to the user.

By default this will have no visual effect.
You can style abbreviation's differently using CSS if you want.

```css
abbr {
	color: red;
}
```

## Best Practices

### Abbreviation Expansion

Whenever using abbreviations for the first time, you should provide the expansion in the same paragraph either in parenthesis or just the general flow of the paragraph.
You can skip expansions for common abbreviations that you think your target audience would know.

If for some reason you are not able to provide the expansion in the same paragraph, you can provide it using the title attribute of the `abbr` tag like this:

```html
<abbr title="Hyper Text Markup Language">HTML</abbr> is one of the primary languages used to write
webpages on the internet.
```

### Using alongside the [`dfn`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dfn) tag

You can use the `abbr` tag alongside the `dfn` tag if you are defining the abbreviation in the sentence you are using the abbreviation in.

```html
<dfn id="html-definition"><abbr title="Hyper Text Markup Language">HTML</abbr></dfn> is one of the
primary languages used to write webpages on the internet.

<a href="#html-definition">HTML</a> is a very easy to use language
```

In the above code snippet we are marking `HTML` as the abbreviation and using `dfn` to mark that it is the term that is being defined in the current sentence.

Marking the term being defined in the current sentence will also help screen readers to provide more context to users.

Also by giving an `id` to the `dfn` tag you can link to the definition later on when using the abbreviation or the full expansion later on in the content using the [`a`](/blog/html-anchor-tag-explained#hash-links) tag.

## Conclusion

By using the `abbr` tag you can improve your websites accessibility and help your content reach a larger audience plus it makes you a better developer thus helping you standout as a developer.

_Leave a comment down below if you learned something new_
