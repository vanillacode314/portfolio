<script lang="ts" context="module">
	export const prerender = true;
</script>

<script>
	import AboutMe from '$lib/layouts/AboutMe.svelte';
	import Contact from '$lib/layouts/Contact.svelte';
	import Landing from '$lib/layouts/Landing.svelte';
	import Links from '$lib/layouts/Links.svelte';
	import Projects from '$lib/layouts/Projects.svelte';
	import Testimonials from '$lib/layouts/Testimonials.svelte';
</script>

<main>
	<Landing />
	<AboutMe />
	<Testimonials />
	<Projects />
	<Contact />
	<Links />
</main>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		padding: 1rem 0;
	}
</style>
