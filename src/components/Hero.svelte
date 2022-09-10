<script>
	import Button from "./Button.svelte";
</script>

<section class="hero">
	<h1>Hi, I build websites people love to use</h1>
	<p>
		I help businesses get more customers by building quick to load, beautiful
		and easy to use websites.
	</p>
	<div class="actions">
		<Button>Contact</Button>
		<Button variant="secondary">See My Work</Button>
	</div>
	<img
		class="hero--image"
		src="/assets/images/hero.svg"
		alt="a person coding on a laptop while sitting on a chair"
	/>
</section>

<style>
	.hero {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(3, auto);
		column-gap: var(--gap);
		padding-block: calc(var(--gap) * 12);
	}
	.actions {
		display: flex;
		align-items: start;
		grid-column: 1/7;
		gap: var(--gap);
	}
	h1 {
		font-size: 70px;
		font-weight: bold;
		line-height: 87%;
		grid-column: 1/7;
	}
	p {
		grid-column: 1/5;
		font-size: 18px;
	}
	.hero--image {
		grid-column: 7/13;
		grid-row: 1/-1;
	}
</style>
