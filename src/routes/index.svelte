<script lang="ts">
	import ContactForm from '$components/ContactForm.svelte';
	import Project from '$components/Project.svelte';
	import Section from '$components/Section.svelte';
	import Skills from '$components/Skills.svelte';

	import Testimonial from '$components/Testimonial.svelte';
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

<div class="lg:flex bg-white dark:bg-gray-800">
	<div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
		<div class="max-w-xl">
			<h2 class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-5xl">
				Professional <span class="text-blue-600 dark:text-blue-400">Web Developer</span>
			</h2>

			<p class="mt-2 text-sm text-gray-500 dark:text-gray-400 lg:text-base">
				I help businesses boost their online presence and compete in the digital age.
			</p>

			<div class="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
				<!-- <a -->
				<!-- 	href="#" -->
				<!-- 	class="block px-3 py-2 text-sm font-semibold text-center text-white transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700" -->
				<!-- 	>Contact ME</a -->
				<!-- > -->
				<a
					href="#contact"
					class="block px-3 py-2 text-sm font-semibold text-center text-gray-700 transition-colors duration-200 transform bg-gray-200 rounded-md hover:bg-gray-300"
					>Contact ME</a
				>
			</div>
		</div>
	</div>

	<div class="w-full h-64 lg:w-1/2 lg:h-auto">
		<div class="w-full h-full bg-cover" style="background-image: url(/growth.jpg)">
			<div class="w-full h-full bg-black opacity-25" />
		</div>
	</div>
</div>
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
	<div class="flex flex-wrap gap-5 justify-center ">
		{#each projects as project}
			<Project {...project} />
		{/each}
	</div>
</Section>
<Section name="Contact" dark>
	<ContactForm />
</Section>
