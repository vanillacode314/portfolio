<script lang="ts">
	import 'papercss/dist/paper.min.css';
	import '../app.scss';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<svelte:head>
	<title>VanillaCode</title>
</svelte:head>

<div class="container">
	<Navbar />
	<slot />
</div>
