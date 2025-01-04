---
title: 'HTML Anchor Tag Explained'
description: 'In depth explainer for the HTML anchor tag including best SEO and Accessibility practices'
seo:
  title: 'HTML Anchor Tag Explained'
  description: 'In depth explainer for the HTML anchor tag including best SEO and Accessibility practices'
  keywords:
    [
      'html',
      'anchor',
      'explained',
      'guide',
      'explainer',
      'a',
      'links',
      'hyperlinks',
      'seo',
      'accessibility'
    ]
author: raqueebuddinaziz
created: 'Jun 11, 2023'
---

Anchor tag the tag that actually interlinks the internet.
Let's see all that it can do.

## Linking Internal Pages

There are three ways to link to pages under the same website.

- Absolute links will always start to resolve the link from the homepage.
- Relative links will resolve the link from the current page.
- Hash Links can be used to link to a section on the current page.

### Absolute Links

```html
<a href="/about">About</a>
```

What comes between the anchor tags will be shown to the user.
Absolute URLs must start with `/`. `/` refers to the homepage of the site you are on.

This will link to the about page in the same website for example if you are browsing https://raqueeb.com and click a link with `href="/about"` it will take you to https://raqueeb.com/about. There is no about page on my site though so the link will fail if you actually click on it.

But if you clicked a link with the same `href` on https://google.com it will take you to https://google.com/about.

One thing to note with absolute links is that they always link to the same page no matter which page the anchor tag exists. For e.g. even if you were on https://raqueeb.com/blog and clicked the about link it will still take you to https://raqueeb.com/about and not https://raqueeb.com/blog/about.

### Relative Links

```html
<a href="about">About</a>
<!-- OR -->
<a href="./about">About</a>
```

Links that don't start with `/` are relative links. There are two syntaxes for relative links either you can just write a link that doesn't start with `/` or write one that starts with `./`. The `.` represents the current URL.

If you click a relative link it will take you to a page relative to the current URL you are on. For e.g. clicking the about link on https://raqueeb.com/blog will take you to https://raqueeb.com/blog/about.

But if you click the link on https://raqueeb.com then it will take you to https://raqueeb.com/about.

### Hash Links

```html
<!-- Relative Hash Link -->
<a href="#linking-external-pages">Linking External Pages</a>
<!-- Absolute Hash Link -->
<a href="/blog/2023/06/11/html-anchor-tag-explained/#linking-external-pages"
	>Linking External Pages</a
>

<div id="#linking-external-pages">Hi</div>
```

Hash links can be used to link to some other part of a page. They can be relative or absolute.
What comes after the tag should be id of an element on the page.

Try clicking the following link: <a href="#linking-external-pages">Linking External Pages</a>

## Linking External Pages

```html
<a href="https://google.com">Google</a>
```

To link to external sites just put the URL in the `href` attribute as you would see it on the URL bar in your browser.

Try clicking the following link: <a href="https://google.com">Google</a>

### Opening Links in New Tabs

If you tried to click the above link you might have noticed it opened in the current tab. Usually when link to external sites you want to open the site on a new tab. We can achieve that using the `target` attribute.

```html
<a href="https://google.com" target="_blank">Google</a>
```

Try clicking this link and see the difference: <a href="https://google.com" target="_blank">Google</a>

## Linking Emails and Phone Numbers

```html
<!-- EMAIL -->
<a href="mailto:raqueebuddin.aziz.314@gmail.com">raqueebuddin.aziz.314@gmail.com</a>
<!-- PHONE -->
<a href="tel:1234567890">Phone</a>
```

Try this link: <a href="mailto:raqueebuddin.aziz.314@gmail.com">raqueebuddin.aziz.314@gmail.com</a>

## Download Links

```html
<!-- Without Filename -->
<a href="/about.txt" download>Download About</a>
<!-- With Filename -->
<a href="/about.txt" download="about.txt">Download About</a>
```

You can link to files on the same website as you are on as download links. The `download` attribute doesn't work with external links.

If you don't provide a filename to the attribute it will try to figure out the filename from the URL.

## Accessible Links

### link text

#### bad link text

```html
<a href="/more-about-html-anchor-tag">Click here</a> to read more about the HTML anchor tag
```

The following link doesn't have accessible text:
<a  href="#hreflang-attribute">Click here</a> to read more about the HTML anchor tag

#### good link text

```html
Click to read more <a href="/more-about-html-anchor-tag">about the HTML anchor tag</a>
```

The following link has accessible text:
Click to read more <a  href="#hreflang-attribute">about the HTML anchor tag</a>

### hreflang attribute

```html
<a href="https://en.google.com" hreflang="en">Google</a>
```

The `hreflang` attribute can be used to hint at what is the language of the page the anchor tag links to.

It has no effect on the functioning of the tag, but rather it can be used by screen readers and other assistive technologies to make users aware language of the page the tag links to.

### type attribute

```html
<a href="/assets/images/blog/html-anchor-tag-explained.svg" type="image/svg">Title Image</a>
```

Similarly the `type` attribute is used by assistive technologies to make users aware the type of the resource the anchor tag links to.

MDN has a list of [commonly used mime types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

## Tracking Links

```html
<a href="/" ping="https://raqueeb.com">Link with tracking</a>
```

There is a `ping` attribute that takes a space separated list of URLs to send a `POST` request to with the body `PING` whenever the link is clicked.

I have never seen the `ping` attribute used in the wild but it exists so I mention it for completeness sake.

## Privacy Concerns and Referrer Policy

### Referrer Header

By default if you link to a URL the server that handles that URL will be told via a header named `Referrer` the URL where you put the anchor tag with the link.

For e.g. if I link to google.com from this site, the servers for google.com will be told that they were linked from https://raqueeb.com/blog/html-anchor-tag-explained

Usually it's fine to provide this info to the server that handles the URL, but sometimes you might want to opt out of this behavior when your URL contains sensitive information or you are supposed to be in a private context.

You can opt out of this at different levels that suit your needs using the `referrerpolicy` attribute.

It can have various values:

- `no-referrer`: This is a complete opt out and would result in not sending the Referrer attribute at all.
- `no-referrer-when-downgrade`: This will only send the referrer header if the resulting link is a `https` link and not an `http` link
- `origin`: This leaves the path of the URL you are only sends the domain name to the servers. For example if you were to click a link on this page with `referrerpolicy=origin` the servers will only be sent `raqueeb.com` i.e. `/blog/html-anchor-tag-explained` will not be sent.
- `same-origin`: This will only send the `Referrer` header if the link is on the same domain as the current page.
- `strict-origin`: same as `origin` but only send if the protocols (the `http` or `https` part) are the same as the current page.
- `strict-origin-when-cross-origin`: This is the default value. It will send the full URL in the header but only if the protocol parts are same as current page.
- `unsafe-url`: This is same as `strict-origin-when-cross-origin` but without the same protocol protection and thus considered unsafe to use.

### Example

```html
<a href="https://google.com" referrerpolicy="no-referrer">Google</a>
```

### Link Relation

There is also a `rel` attribute that can be used to control the behavior of the link.

It has various possible values (You can provide multiple values by separating them with spaces):

- `noreferrer`: This has the same same effect as `no-referrer` for the `referrerpolicy` attribute i.e. no `Referrer` headers will be sent.
- `noopener`: This is a really useful attribute when you are linking to external sites, by default if you open a external site it can modify the page that opened it, to make sure it cannot do that you can use the `noopener` value for the `rel` attribute. Newer browsers automatically assume `noopener` if you set `target` attribute to `_blank`.
- `nofollow`: This will let the search engines know that you don't want them to follow this link.

### Example

```html
<a href="https://google.com" rel="noreferrer noopener">Google</a>
```

## SEO Concerns

If you are not aware SEO is the practice of making your site as accessible to both humans and robots (like search engines) as possible.

We can take some steps to make our links as SEO friendly as possible.

1. Make sure you follow all the [accessible links](#accessible-links) practices.
1. You can add some special metadata to the link using the `rel` attribute if the link needs it. (If you want you can provide multiple values by separating them with spaces)
   1. If your link is to goto the next page, you can add the `rel="next"`.
   1. If your link is to goto the previous page, you can add the `rel="prev"`.
   1. If you don't want a search engine to follow your link, you can use `rel="nofollow"`.

## Conclusion

On the surface the anchor tag seems like the most simplest tag with not much considerations.

But if you want to provide the best user experience and have your site rank first on search engines you need to understand all that the anchor tag can do.

Understanding all that these tags have to provide not only makes you a better developer but also leads to better experience for your users.

_Leave a comment down below if you learned something new about the anchor tag_
