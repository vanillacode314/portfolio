<script context="module" lang="ts">
	export interface Project {
		id: string;
		name: string;
		description: string;
		image: boolean;
		tech: string[];
		url: string;
		repo_url: string;
	}
</script>

<script lang="ts">
	import { Badge, Card } from 'spaper';

	export let project: Project;
	export let index: number;
</script>

<Card
	title="#{index + 1} {project.name}"
	image={project.image && `/images/${project.id}.jpg`}
	imageAlt="{project.name} screenshot"
>
	<p>
		{project.description}
	</p>
	<div class="badges">
		{#each project.tech as tech}
			<Badge>{tech}</Badge>
		{/each}
	</div>
	<div slot="bottom">
		<a rel="external" class="background-primary" href={project.url}>Visit</a>
		<a rel="external" href={project.repo_url}>Repo / Source Code</a>
	</div>
</Card>

<style lang="scss">
	.badges {
		display: flex;
		gap: 0.5rem;
	}
</style>
