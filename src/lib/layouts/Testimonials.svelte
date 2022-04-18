<script lang="ts">
	import Testimonial from '$lib/components/Testimonial.svelte';
	import testimonials from '$lib/data/testimonials.json';
	import { Card } from 'spaper';
</script>

<Card header="Testimonials" id="testimonials">
	<section class="testimonials">
		{#each testimonials as testimonial}
			<Testimonial {testimonial} />
		{/each}
	</section>
</Card>

<style lang="scss">
	.testimonials {
		/* box-sizing: border-box; */
		/* padding: 1rem; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
</style>
