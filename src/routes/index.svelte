<script lang="ts">
	/// COMPONENTS ///
	import ContactForm from '$components/ContactForm.svelte';
	import Hero from '$components/Hero.svelte';
	import Project from '$components/Project.svelte';
	import Section from '$components/Section.svelte';
	import Skills from '$components/Skills.svelte';
	import Testimonial from '$components/Testimonial.svelte';

	/// DATA ///
	import projects from '$data/projects';
	import testimonials from '$data/testimonials';
</script>

<svelte:head>
	<title>Professional Web Developer - VanillaCode</title>
	<meta name="description" content="Professional Web Development Services to grow your business" />
	<meta
		name="keywords"
		content="professional web developer, web developer, freelance web developer, svelte web developer, frontend web developer, fullstack web developer, fullstack, frontend, svelte, vue, tailwind, html, css, js, typescript"
	/>
</svelte:head>

<Hero />
<Section name="Skills" fluid>
	<Skills />
</Section>
<Section name="Testimonials" dark>
	<div class="flex flex-wrap gap-5 justify-center items-start">
		{#each testimonials as testimonial}
			<Testimonial {...testimonial} />
		{/each}
	</div>
</Section>
<Section name="Projects">
	<div class="flex flex-wrap gap-5 justify-center">
		{#each projects as project}
			<Project {...project} />
		{/each}
	</div>
</Section>
<Section name="Contact" dark>
	<ContactForm />
</Section>
