<script>
	import Button from "./Button.svelte";
</script>

<section class="grid hero">
	<div class="content">
		<h1>Hi, I build websites people love to use_</h1>
		<p>
			I help businesses get more customers by building quick to load, beautiful
			and easy to use websites.
		</p>
		<div class="actions">
			<Button href="#contact">Contact</Button>
			<Button href="#projects" variant="secondary">See My Work</Button>
		</div>
	</div>
	<img
		class="hero--image"
		src="/assets/images/hero.svg"
		alt=""
	/>
</section>

<style lang="postcss">
	.hero {
		align-content: center;
		padding-block: calc(var(--gap) * 6);
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		grid-template-areas:
			"content image"
			"content image";
		gap: var(--larger-gap);
		@media (--md-n-below) {
			grid-template-areas:
				"content content"
				"content content";
			justify-items: center;
			text-align: center;
			padding-block: calc(var(--gap) * 12);
		}
	}
	.content {
		grid-area: content;
		display: grid;
		align-content: center;
		gap: var(--gap);
		h1 {
			font-size: var(--h1-text);
			font-family: var(--headline-family);
			/* font-weight: bold; */
			line-height: 95%;
		}
		p {
			font-size: var(--body-text);
			line-height: 1.1;
		}
		.actions {
			display: flex;
			gap: var(--gap);
			margin-top: var(--gap);
		}
		@media (--md-n-below) {
			justify-items: center;
			text-align: center;
		}
	}
	.hero--image {
		grid-area: image;
		@media (--md-n-below) {
			display: none;
		}
	}
</style>
