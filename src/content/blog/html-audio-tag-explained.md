---
title: 'HTML Audio Tag Explained'
description: 'Learn HTML Audio Tag'
seo:
  title: 'HTML Audio Tag Explained'
  description: 'Learn HTML Audio Tag'
  keywords: []
author: raqueebuddinaziz
created: 'Jun 30, 2023'
---

Let's see how to embed audio files on your websites using the `audio` tag.

## Embedding Audio Files

```html
<audio controls src="/assets/audios/test.mp3"></audio>
```

<audio controls src="/assets/audios/test.mp3"></audio>

You can use the `src` attribute of the `audio` tag to provide the URL of the audio file you want to embed on the web page.

Or you can provide multiple sources with the `source` tag

```html
<audio controls>
	<source src="/assets/audios/test.mp3" type="audio/mpeg" />
	<source src="/assets/audios/test.ogg" type="audio/ogg" />
</audio>
```

<audio controls>
	<source src="/assets/audios/test.mp3" type="audio/mpeg" />
</audio>

## Fallback content

```html
<audio controls src="/assets/audios/test.mp3">
	<a href="/assets/audios/test.mp3" download>Download audio</a>
</audio>
<!-- OR WITH SOURCE TAG -->
<audio controls>
	<source src="/assets/audios/test.mp3" type="audio/mpeg" />
	<source src="/assets/audios/test.ogg" type="audio/ogg" />
	<a href="/assets/audios/test.mp3" download>Download audio</a>
</audio>
```

Anything in between the opening and closing `audio` tags except `source` tags will be shown if the browser doesn't support audio embeds.

## Customizing the audio player

### Autoplay

You can use the `autoplay` attribute to autoplay the audio on load. Autoplay is subject to various <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide">browser policies</a> and the browser may or may not play the audio based on these policies.

```html
<audio autoplay controls src="/assets/audios/test.mp3"></audio>
```

<audio autoplay controls src="/assets/audios/test.mp3"></audio>

Depending on your browser settings the above audio track might have autoplayed or not

### No Default Controls

If you omit the `controls` attribute no controls will appear in the browser, this can be useful if you want to create custom audio controls.

```html
<audio id="audio" src="/assets/audios/test.mp3"></audio>
<button id="play-audio">Play</button>
<button id="pause-audio">Pause</button>
<script>
	const audio = document.getElementById('audio')
	const playAudio = document.getElementById('play-audio')
	const pauseAudio = document.getElementById('pause-audio')
	playAudio.addEventListener('click', () => {
		audio.play()
	})
	pauseAudio.addEventListener('click', () => {
		audio.pause()
	})
</script>
```

<audio id="audio" src="/assets/audios/test.mp3"></audio>
<button id="play-audio" style="background-color: black; padding: .5rem 1.25rem; color: white">Play</button>
<button id="pause-audio" style="background-color: black; padding: .5rem 1.25rem; color: white">Pause</button>

<script>
	const audio = document.getElementById('audio')
	const playAudio = document.getElementById('play-audio')
	const pauseAudio = document.getElementById('pause-audio')
	playAudio.addEventListener('click', () => {
		audio.play()
	})
	pauseAudio.addEventListener('click', () => {
		audio.pause()
	})
</script>

### Loop Audio

To make the audio loop automatically use the `loop` attribute.

```html
<audio loop controls id="audio" src="/assets/audios/test.mp3"></audio>
```

<audio loop controls id="audio" src="/assets/audios/test.mp3"></audio>

### Muted by default

To make the audio muted by default use the `muted` attribute.

```html
<audio muted controls id="audio" src="/assets/audios/test.mp3"></audio>
```

<audio muted controls id="audio" src="/assets/audios/test.mp3"></audio>

### Preload hinting

To hint the browser whether this audio file should be preloaded (for e.g. if you know it's highly likely that the user will play the audio think Spotify then preloading makes sense) or not you can use the `preload` attribute it has 3 values.

- `none`: Don't preload anything.
- `metadata`: Only preload the metadata like audio length.
- `auto`: Preload the whole file.

```html
<audio preload="auto" controls id="audio" src="/assets/audios/test.mp3"></audio>
```

Note that this just hints the browser, and the browser may or may not follow the hint.

## Conclusion

So that's how you embed audio files on your websites.
You can use the default controls or create your own like spotify or youtube music.

_Leave a comment down below, if you have any questions :)_
