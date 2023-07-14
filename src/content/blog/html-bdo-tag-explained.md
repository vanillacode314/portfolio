---
title: 'HTML BDO Tag Explained'
description: 'Learn how to use the bdo tag to override text direction in your HTML in an accessible and SEO friendly way'
seo:
  title: 'HTML BDO Tag Explained'
  description: 'Learn how to use the bdo tag to override text direction in your HTML in an accessible and SEO friendly way'
  keywords:
    [
      'html',
      'bdo tag',
      'seo',
      'accessibility',
      'guide',
      'explainer',
      'explained',
      'bidirectional text'
    ]
author: raqueebuddinaziz
created: 'Jul 13, 2023'
---

The <abbr>`bdo`</abbr> (bi-directional override) tag can be used to override the text direction in your HTML.

## Usage

You can use the `dir` attribute with the `bdo` tag to override the default text directionality.
Note that the `dir` attribute has special behavior with the `bdo` tag.

```html
<p>This is normal direction for English language</p>
<p dir="rtl">
	This is RTL direction for English language but the text still flows left to right and is readable
</p>
<bdo dir="rtl">
	This is RTL direction for English language but the text flows right to left and is hard to read
</bdo>
```

<div class="p-5 rounded-xl border border-black">
  <p>This is normal direction for English language</p>
  <p dir="rtl">
    This is RTL direction for English language but the text still flows left to right and is readable
  </p>
  <bdo dir="rtl">
    This is RTL direction for English language but the text flows right to left and is hard to read
  </bdo>
</div>

## Conclusion

I can't think of any practical use cases for the `bdo` tag except for games I guess.
It's a weird tag but if it's exists there is probably a use case for it.

_Leave a comment down below, if you have a use case for the `bdo` tag_
