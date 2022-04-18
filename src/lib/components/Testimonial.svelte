<script context="module" lang="ts">
	export interface Testimonial {
		content: string;
		author: string;
	}
</script>

<script lang="ts">
	import { Card } from 'spaper';

	export let testimonial: Testimonial;
</script>

<Card title="By {testimonial.author}">
	<p>
		<span class="quote">&#8220;</span>{testimonial.content}<span class="quote end">&#8221;</span>
	</p>
</Card>

<style lang="scss">
	.quote {
		display: block;
		font-size: xxx-large;
		&.end {
			float: right;
		}
	}
</style>
