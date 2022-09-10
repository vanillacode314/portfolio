<script lang="ts">
	export let title: string;
</script>

<section {...$$restProps}>
	<h2>{title}</h2>
	<div class="content">
		<slot />
	</div>
</section>

<style>
	h2 {
		font-size: var(--font-size-fluid-3);
		font-weight: bold;
		text-align: center;
		max-width: 15ch;
		margin-inline: auto;
	}
	section {
		padding-block: var(--large-gap);
		display: flex;
		flex-direction: column;
		gap: var(--gap);
	}
</style>
