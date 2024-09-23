---
title: 'HTML Base Tag Explained'
description: 'Learn everything you need to know about the html base tag'
seo:
  title: 'HTML Base Tag Explained'
  description: 'Learn everything you need to know about the html base tag'
  keywords: ['html', 'base tag', 'links', 'guide', 'explainer', 'explained']
author: raqueebuddinaziz
created: 'Jul 7, 2023'
---

The `base` tag can be used to set the base URL for every anchor tag on the page it's used in,
you can also use it to set the default behavior for links to be opened in a new tab.

## Usage

Setting the `href` attribute of the `base` tag will set the base URL for every anchor on the page including relative URLs, hash URLs, absolute URLs that start with a `/`.

(To learn more about different types of URLs check out this blog post on [anchor tags](/blog/2023/06/11/html-anchor-tag-explained/#linking-internal-pages))

```html
<base href="https://google.com" />

<!-- This will goto https://google.com/test -->
<a href="test">Test</a>

<!-- This will also goto https://google.com/test -->
<a href="/test">Test</a>

<!-- This will not goto https://google.com/test -->
<a href="https://raqueeb.com/test">Test</a>

<!-- This will not goto https://google.com/test#hash -->
<a href="/test#hash">Test</a>
```

The above code will make every link on this page which doesn't specify a base URL itself start with google.com.

## Open all links in new tabs by default

If you set the `target` attribute of a `base` tag to `_blank` every link by default will open in a new tab.

```html
<base target="_blank" />

<!-- All these links will open in new tab -->
<a href="test">Test</a>
<a href="/test">Test</a>
<a href="https://raqueeb.com/test">Test</a>
<a href="/test#hash">Test</a>
```

## Common pitfalls

- Only use one `base` tag per page, if you use multiple only the first one will be considered valid.
- SEO Tags like `og:image` and `twiter:image` doesn't take the base tag into account you still need to use the full URL with them.

## Conclusion

The base tag is a weird one, you probably will never use it for changing the actual base URL rather you might use it to change the default behaviour of links to open in new tab.

_Leave a comment down below if you can think of a use case for the base tag in your projects_
