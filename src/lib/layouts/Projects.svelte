<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import projects from '$lib/data/projects.json';
</script>

<section class="projects">
	{#each projects as project (project.id)}
		<Project {project} />
	{/each}
</section>

<style lang="scss">
	.projects {
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		gap: 1rem;
	}
</style>
