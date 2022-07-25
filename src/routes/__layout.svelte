<script lang="ts">
	import '../app.css';
	/// COMPONENTS ///
	import Footer from '$components/Footer.svelte';
	import Header from '$components/Header.svelte';
</script>

<Header />
<main class="bg-white dark:bg-gray-800">
	<slot />
</main>
<Footer />
