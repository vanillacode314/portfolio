<script lang="ts">
	import ContactForm from '$components/ContactForm.svelte';
	import Project from '$components/Project.svelte';
	import Skills from '$components/Skills.svelte';

	import Testimonial from '$components/Testimonial.svelte';
	import projects from '$data/projects';
	import testimonials from '$data/testimonials';
</script>

<svelte:head>
	<title>Professional Web Developer - VanillaCode</title>
</svelte:head>

<div class="lg:flex bg-white dark:bg-gray-800">
	<div class="flex items-center justify-center w-full px-6 py-8 lg:h-[32rem] lg:w-1/2">
		<div class="max-w-xl">
			<h2 class="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">
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
<div
	class="flex gap-5 p-5 justify-center items-center flex-wrap dark:bg-gray-100 bg-gray-800"
	id="skills"
>
	<h2
		class="text-2xl font-semibold text-white dark:text-gray-800 lg:text-3xl basis-full text-center"
	>
		<a class="underline" href="#skills">#</a> Skills
	</h2>
	<Skills />
</div>
<div
	class="flex gap-5 p-5 justify-center items-center flex-wrap bg-gray-100 dark:bg-gray-800"
	id="testimonials"
>
	<h2
		class="text-2xl font-semibold dark:text-white text-gray-800 lg:text-3xl basis-full text-center"
	>
		<a class="underline" href="#testimonials">#</a> Testimonials
	</h2>
	{#each testimonials as testimonial}
		<Testimonial {...testimonial} />
	{/each}
</div>
<div class="flex gap-5 p-5 justify-center flex-wrap dark:bg-gray-100 bg-gray-800" id="projects">
	<h2
		class="text-2xl font-semibold text-white dark:text-gray-800 lg:text-3xl basis-full text-center"
	>
		<a class="underline" href="#projects">#</a> Projects
	</h2>
	{#each projects as project}
		<Project {...project} />
	{/each}
</div>
<div
	class="flex gap-5 p-5 justify-center items-center flex-wrap bg-gray-100 dark:bg-gray-800"
	id="contact"
>
	<h2
		class="text-2xl font-semibold dark:text-white text-gray-800 lg:text-3xl basis-full text-center"
	>
		<a class="underline" href="#contact">#</a> Contact
	</h2>
	<ContactForm />
</div>
