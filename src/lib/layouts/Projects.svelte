<script lang="ts">
	import Project from '$lib/components/Project.svelte';
	import projects from '$lib/data/projects.json';
	import { Card } from 'spaper';
</script>

<Card header="Projects" id="projects">
	<section class="projects">
		{#each projects as project, index (project.id)}
			<Project {project} {index} />
		{/each}
	</section>
</Card>

<style lang="scss">
	.projects {
		/* box-sizing: border-box; */
		/* padding: 1rem; */
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1rem;
	}
</style>
