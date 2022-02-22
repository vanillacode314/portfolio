<script lang="ts">
	import '../app.scss';
	import 'papercss/dist/paper.min.css';
	import Navbar from '$lib/components/Navbar.svelte';
</script>

<div class="container-lg">
	<Navbar />
	<slot />
</div>
