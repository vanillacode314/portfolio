<script lang="ts">
	export let title: string;
</script>

<section class="section">
	<h2>{title}</h2>
	<slot />
</section>

<style>
	h2 {
		font-size: 40px;
		line-height: 65%;
		font-weight: bold;
		text-align: center;
		max-width: 15ch;
		margin-inline: auto;
	}
</style>
