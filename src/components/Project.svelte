<script lang="ts">
	export let id: string;
	export let name: string;
	export let description: string;
	export let image: boolean;
	export let url: string;
	export let repo_url: string;
	export let tech: string[];

	function onLinkClick() {
		gtag('event', 'visit', {
			event_category: 'click',
			event_label: `visit ${name.toLowerCase()}`
		});
	}

	function onRepoClick() {
		gtag('event', 'visit_repo', {
			event_category: 'click',
			event_label: `visit ${name.toLowerCase()} repo`
		});
	}
</script>

<div
	class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 flex flex-col snap-center md:snap-align-none"
>
	<div class="px-4 py-2">
		<h1 class="text-2xl font-bold text-gray-800 uppercase dark:text-white">
			{name}
		</h1>
		<p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
			{description}
		</p>
	</div>
	<div class="grow" />
	<div class="flex gap-1 flex-wrap py-2 px-4">
		{#each tech as t}
			<span
				class="px-3 py-1 text-xs font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500"
			>
				{t}
			</span>
		{/each}
	</div>

	{#if image}
		<img
			class="object-cover w-full h-48 mt-2"
			src="/assets/images/{id}.webp"
			alt={name}
			loading="lazy"
		/>
	{/if}

	<div class="flex items-center justify-end gap-3 px-4 py-2 bg-gray-900">
		<a
			class="px-2 py-1 text-xs uppercase font-semibold text-white transition-colors duration-200 transform bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
			href={url}
			rel="external noopener"
			on:click={onLinkClick}
			target="_blank"
		>
			Visit
		</a>
		{#if repo_url}
			<a
				class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-200 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
				rel="external noopener"
				target="_blank"
				on:click={onRepoClick}
				href={repo_url}
			>
				Repo / SourceCode
			</a>
		{/if}
	</div>
</div>
