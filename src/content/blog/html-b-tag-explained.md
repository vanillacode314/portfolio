---
title: 'HTML B (Bold) Tag Explained'
description: "Learn how to use html bold tag, and why you should instead learn and use it's modern alternatives"
seo:
  title: 'HTML B (Bold) Tag Explained'
  description: "Learn how to use html bold tag, and why you should instead learn and use it's modern alternatives"
  keywords:
    [
      'html',
      'style',
      'bold tag',
      'b tag',
      'guide',
      'explainer',
      'explained',
      'strong tag',
      'font weight'
    ]
author: raqueebuddinaziz
created: 'Jul 5, 2023'
---

The `b` tag can be used to make text bold.

## Usage

Wrap whatever text you want to bold with the `b` tag.

```html
See more examples on our <b>instagram page</b>
```

<div class="border rounded-xl p-5 border-black">
See more examples on our <b>instagram page</b>
</div>

## Legacy

The `b` tag was the only way to make text bold or emphasize an important part of a sentence before the introduction of [`CSS`](https://developer.mozilla.org/en-US/docs/Web/CSS) and `strong` tag.

Let's see how to use these modern alternatives.

## Modern approaches

### To make text bold

If your goal is to make the font bold, you should use the `font-weight` CSS property with value `bold` or `700`.

```html
See more examples on our <span style="font-weight: bold">instagram page</span>
```

<div class="border rounded-xl p-5 border-black">
See more examples on our <span style="font-weight: bold">instagram page</span>
</div>

### To mark text as important

If your goal is to mark some text in a paragraph or sentence as important, you should use the `strong` tag. It will still make the font bold but that is completely optional and you are free to use the `font-weight` CSS property to reset the font to normal weight.

```html
See more examples on our <strong>instagram page</strong>
<!-- OR WITH DEFAULT WEIGHT -->
See more examples on our <strong style="font-weight: normal">instagram page</strong>
```

<div class="border rounded-xl p-5 border-black">
See more examples on our <strong>instagram page</strong><br/>
See more examples on our <strong style="font-weight: normal">instagram page</strong>
</div>

## Conclusion

The `b` tag is kind of deprecated with the introduction of `CSS` and `strong` tag, and you should instead use modern alternatives to what it was designed to do as they convey more meaning and thus are more accessible.

_Leave a comment down below, if you knew about these modern approaches_
