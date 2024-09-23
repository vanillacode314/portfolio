---
title: 'HTML Area Tag Explained'
description: 'A guide on how to use area tag to enhance your images'
seo:
  title: 'HTML Area Tag Explained'
  description: 'A guide on how to use area tag to enhance your images'
  keywords: ['html', 'area tag', 'explainer', 'guide', 'enhance web images']
author: raqueebuddinaziz
created: 'Jun 22, 2023'
---

The tag that'll make you go, what you can do that. This guide assumes you have basic geometry experience especially co-ordinate systems.

## Mapping parts of images to HTML

You can use the `area` tag with `map` tag to map parts of images to HTML.

There are 3 types of shapes you can define, one map can include multiple areas

- `rect`: A rectangle the `coords` are of form `x1,y1,x2,y2`, where `(x1,y1)` is the top left corner and `(x2,y2)` is the bottom right corner.
- `circle`: A circle the `coords` are of form `x,y,r`, where `(x,y)` is the center and `r` is the radius.
- `poly`: A polygon the `coords` are of form `x1,y1,x2,y2,x3,y3,...,xn,yn`, the browser will start with the first set of co-ordinates and then move on to the next set of coordinates. If the first and last co-ordinates are not same then the browser will move from the last co-ordinate to the first co-ordinate to close the area.

All coordinates are in pixels where `(0,0)` aka the origin is at the top left of the image (this does not include padding).

All of the following code examples use an image that is `200x200` pixels.

### Rect

```html
<map name="my-map">
	<area shape="rect" coords="0,0,100,100" href="https://google.com" />
	<area shape="rect" coords="100,0,200,100" href="https://instagram.com" />
</map>

<img usemap="#my-map" src="/assets/images/4-squares.png" />
```

<map name="my-map">
	<area shape="rect" coords="0,0,100,100" href="https://google.com" />
	<area shape="rect" coords="100,0,200,100" href="https://instagram.com" />
</map>

<img usemap="#my-map" src="/assets/images/4-squares.png" class="rounded-xl"/>

Try hovering over the red and blue square in the image.
Notice that the image is one whole thing and not 4 separate `img` tags yet you can still add a link to partial parts of images like we do to the red and blue square.

### Circle

```html
<map name="my-map">
	<area shape="circle" coords="100,100,100" href="https://google.com" />
</map>

<img usemap="#my-map" src="/assets/images/4-squares.png" />
```

<map name="my-map2">
	<area shape="circle" coords="100,100,100" href="https://google.com" />
</map>

<img usemap="#my-map2" src="/assets/images/4-squares.png" class="rounded-xl"/>

This time our area is a circle centered at the center of our image i.e. the point where all the squares meet and the radius of the circle is 100 pixels.

### Polygon

```html
<map name="my-map">
	<area shape="poly" coords="0,200,100,0,200,200" href="https://google.com" />
</map>

<img usemap="#my-map" src="/assets/images/4-squares.png" />
```

<map name="my-map3">
	<area shape="poly" coords="0,200,100,0,200,200" href="https://google.com" />
</map>

<img usemap="#my-map3" src="/assets/images/4-squares.png" class="rounded-xl"/>

This time our area is a polygon with three sides aka a triangle,
the base of the triangle sits on the bottom edge of the images and the vertex sits on the center of the top edge of the image.

## Accessibility

You can provide some alt text to the area tag in case the image fails to load.
The alt text should provide the same choices as the image would provide if it loaded.

```html
<map name="my-map">
	<area shape="rect" coords="0,0,100,100" href="https://google.com" alt="Google" />
	<area shape="rect" coords="100,0,200,100" href="https://instagram.com" alt="Instagram" />
</map>

<img usemap="#my-map" src="/assets/images/4-squares.pn" />
```

<map name="my-map4">
	<area shape="rect" coords="0,0,100,100" href="https://google.com" alt="Google" />
	<area shape="rect" coords="100,0,200,100" href="https://instagram.com" alt="Instagram" />
</map>

<img usemap="#my-map4" src="/assets/images/4-squares.pn" />

## Custom Click Handlers

```html
<map name="my-map">
	<!-- Inline Handlers -->
	<area shape="rect" coords="0,0,100,100" onclick="alert('hi')" />
	<area class="my-area" shape="rect" coords="100,0,200,100" />
</map>

<script>
	const el = document.querySelector('.my-area')
	el.addEventListener('click', (e) => {
		alert('hi2')
	})
</script>

<img usemap="#my-map" src="/assets/images/4-squares.png" />
```

<map name="my-map5">
	<area shape="rect" coords="0,0,100,100" onclick="alert('hi')" />
	<area class="my-area" shape="rect" coords="100,0,200,100"  />
</map>
<script>
	const el = document.querySelector('.my-area')
	el.addEventListener('click', (e) => {
		alert('hi2')
	})
</script>

<img usemap="#my-map5" src="/assets/images/4-squares.png" class="rounded-xl"/>

Try clicking the red and blue squares and see the alert pop-up.

## Parity with anchor tag

The area tag has all the attributes that the [`a`](/blog/2023/06/11/html-anchor-tag-explained) tag has.
For example you can use the [`download`](/blog/2023/06/11/html-anchor-tag-explained/#download-links) attribute just as you would with the `a` tag.

```html
<map name="my-map">
	<area shape="poly" coords="0,200,100,0,200,200" href="/assets/images/4-squares.png" download />
</map>

<img usemap="#my-map" src="/assets/images/4-squares.png" />
```

<map name="my-map6">
	<area shape="poly" coords="0,200,100,0,200,200" href="/assets/images/4-squares.png" download />
</map>

<img usemap="#my-map6" src="/assets/images/4-squares.png" class="rounded-xl"/>

## Conclusion

The `area` tag has a very niche use case but you appreciate it exists when you are in a really weird situation with your images and realize you need it.

_If didn't knew that the area tag was a thing, Leave a comment down below_
