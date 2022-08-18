<script lang="ts">
	import { getContext } from "svelte";

	$: dark = getContext<boolean>("dark");
	const skills = [
		{
			icon: "i-vscode-icons-file-type-html",
			title: "HTML5",
		},
		{
			icon: "i-vscode-icons-file-type-css",
			title: "CSS3",
		},
		{
			icon: "i-logos-javascript",
			title: "Javascript",
		},
		{
			icon: "i-logos-rust",
			title: "Rust",
		},
		{
			icon: "i-logos-python",
			title: "Python",
		},
		{
			icon: "i-logos-typescript-icon",
			title: "Typescript",
		},
		{
			icon: "i-logos-svelte-icon",
			title: "Svelte/Kit",
		},
		{
			icon: "i-logos-vue",
			title: "VueJS",
		},
		{
			icon: "i-logos-nuxt-icon",
			title: "NuxtJS",
		},
		{
			icon: "i-vscode-icons-file-type-astro",
			title: "AstroJS",
		},
		{
			icon: "i-logos-tailwindcss-icon",
			title: "TailwindCSS",
		},
		{
			icon: "i-logos-nodejs-icon",
			title: "NodeJS",
		},
		{
			icon: "i-vscode-icons-file-type-scss",
			title: "SCSS",
		},
		{
			icon: "i-logos-postcss",
			title: "PostCSS",
		},
		{
			icon: "i-logos-capacitorjs-icon",
			title: "CapacitorJS",
		},
		{
			icon: "i-logos-postgresql",
			title: "SQL",
		},
		{
			icon: "i-logos-graphql",
			title: "GraphQL",
		},
		{
			icon: "i-logos-firebase",
			title: "Firebase",
		},
	];
</script>

<div
	class="max-w-5xl mx-auto justify-center justify-items-center grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 md:gap-5 gap-2 gap-y-5 sm:text-5xl text-4xl flex-wrap {dark
		? `dark:text-white text-gray-700`
		: `text-white dark:text-gray-700`}"
>
	{#each skills as { icon, title }}
		<div class="flex flex-col items-center gap-1">
			<span>
				<div class={icon} />
			</span>
			<span class="uppercase text-xs font-semibold">{title}</span>
		</div>
	{/each}
</div>
