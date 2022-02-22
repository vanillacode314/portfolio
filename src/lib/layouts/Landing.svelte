<script lang="ts">
	import { Card, Button } from 'spaper';
</script>

<div class="paper">
	<section class="landing">
		<h2 class="text-secondary">
			I help businesses boost their online presence and compete in the digital age.
		</h2>
		<Button isLink href="#projects">See My Work</Button>
	</section>
	<img src="/assets/growth.svg" alt="growth" />
</div>

<style lang="scss">
	div {
		align-items: center;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
		@media screen and (max-width: 850px) {
			grid-template-columns: 1fr;
			h2 {
				font-size: xxx-large;
			}
		}
	}

	img {
		@media screen and (max-width: 850px) {
			display: none;
		}
	}
</style>
