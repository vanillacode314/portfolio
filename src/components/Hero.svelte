<script>
	import Button from "./Button.svelte";
</script>

<section class="grid hero">
	<h1>Hi, I build websites people love to use</h1>
	<p>
		I help businesses get more customers by building quick to load, beautiful
		and easy to use websites.
	</p>
	<div class="actions">
		<Button href="#contact">Contact</Button>
		<Button href="#projects" variant="secondary">See My Work</Button>
	</div>
	<img
		class="hero--image"
		src="/assets/images/hero.svg"
		alt="a person coding on a laptop while sitting on a chair"
	/>
</section>

<style lang="postcss">
	.hero {
		grid-template-rows: repeat(3, auto);
		padding-block: calc(var(--gap) * 12);
		row-gap: var(--gap);
	}
	.actions {
		display: flex;
		grid-column: 1/7;
		gap: var(--gap);
	}
	h1 {
		font-size: clamp(3rem, 5vw, 4.5rem);
		font-weight: bold;
		grid-column: 1 / span 6;
		line-height: 95%;
	}
	p {
		grid-column: 1/5;
		font-size: 18px;
	}
	.hero--image {
		grid-column: 7 / span 6;
		grid-row: 1/-1;
		@media (--md-n-below) {
			display: none;
		}
	}
	@media (--md-n-below) {
		h1 {
			grid-column: span 12;
		}
		p {
			grid-column: span 12;
		}
		.actions {
			grid-column: span 12;
		}
		.hero--image {
			grid-column: span 12;
		}
	}
</style>
