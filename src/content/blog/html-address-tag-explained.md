---
title: 'HTML Address Tag Explained'
description: 'Explainer on how to use HTML Address Tag to build more Accessible and SEO friendly webpages'
seo:
  title: 'HTML Address Tag Explained'
  description: 'Explainer on how to use HTML Address Tag to build more Accessible and SEO friendly webpages'
  keywords: ['html', 'address', 'explainer', 'guide', 'explained']
author: raqueebuddinaziz
created: 'Jun 20, 2023'
---

Let's see how we can use the `address` tag to improve our sites SEO and accessibility quite a bit.

## Usage

```html
<address>You can contact me at raqueebuddin.aziz.314@gmail.com</address>
<!-- OR  -->
<address>Phone No: +11234567890</address>
<!-- OR  -->
<address>Mail us a letter at P/O box at XYZ Street, ABC City</address>
<!-- OR  you are free to put multiple contact methods in the same tag -->
<address>
	You can contact me at raqueebuddin.aziz.314@gmail.com<br />
	Phone No: +11234567890<br />
	Mail us a letter at P/O box at XYZ Street, ABC City
</address>
```

`address` tag is meant to be used to provide contact information for the current context, if you use it inside an `article` tag it would be associated with that part of the page, if you use it directly under `body` it would be considered a contact for the entire webpage and so on.

## Misconceptions

Common misconceptions about the `address` tag is that it should be used for physical addresses only.

You can use it for a physical address as that is just one way to contact somebody but you can use it for any other way to contact you including emails, phone numbers, discord etc...

## Why not just use a div or a span?

tldr; for SEO and Accessibility.

If you use a div or a span for putting in contact information, the browser doesn't know it's contact information it just sees it as any other generic text, which will lead to

- Search engines not scraping the contact details and provide those in search results.
- Assistive technologies like screen readers won't announce it as contact information which can lead to bad user experience.

## Things not to use address tag for

You should not put any other information than the contact details inside the `address` tag, for e.g. publishing date for an article or the description of the article.

## Conclusion

In summary the `address` tag is a great way to build more Accessible and SEO friendly webpages.
If you consistently use it in your webpages,then your sites will have better SEO and better UX leading to more customers and happier customers.

_Leave a comment down below, if you find this article useful_
