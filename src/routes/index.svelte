<script>
	import AboutMe from '$lib/layouts/AboutMe.svelte';
	import Landing from '$lib/layouts/Landing.svelte';
	import Projects from '$lib/layouts/Projects.svelte';
</script>

<Landing />
<div class="about" id="about">
	<AboutMe />
</div>
<div class="projects" id="projects">
	<Projects />
</div>

<!-- <style lang="scss"> -->
<!-- 	.projects { -->
<!-- 		padding: 1rem; -->
<!-- 	} -->
<!-- </style> -->
