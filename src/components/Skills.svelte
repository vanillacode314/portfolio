<script lang="ts">
	import IconSvelte from '~icons/logos/svelte-icon';
	import IconVue from '~icons/logos/vue';
	import IconNuxt from '~icons/logos/nuxt-icon';
	import IconTailwindCSS from '~icons/logos/tailwindcss-icon';
	import IconPython from '~icons/logos/python';
	import IconNodeJS from '~icons/logos/nodejs-icon';
	import IconHTML from '~icons/vscode-icons/file-type-html';
	import IconCSS from '~icons/vscode-icons/file-type-css';
	import IconSCSS from '~icons/vscode-icons/file-type-scss';
	import IconPostCSS from '~icons/logos/postcss';
	import IconCapacitorJS from '~icons/logos/capacitorjs-icon';
	import IconJS from '~icons/logos/javascript';
	import IconTS from '~icons/logos/typescript-icon';
	import IconSQL from '~icons/logos/postgresql';
	import IconGraphQL from '~icons/logos/graphql';
	import IconFirebase from '~icons/logos/firebase';
	import { getContext } from 'svelte';

	$: dark = getContext<boolean>('dark');
	const skills = [
		{
			icon: IconHTML,
			title: 'HTML5'
		},
		{
			icon: IconCSS,
			title: 'CSS3'
		},
		{
			icon: IconJS,
			title: 'Javascript'
		},
		{
			icon: IconTS,
			title: 'Typescript'
		},
		{
			icon: IconSvelte,
			title: 'Svelte/Kit'
		},
		{
			icon: IconVue,
			title: 'VueJS'
		},
		{
			icon: IconNuxt,
			title: 'NuxtJS'
		},
		{
			icon: IconTailwindCSS,
			title: 'TailwindCSS'
		},
		{
			icon: IconPython,
			title: 'Python'
		},
		{
			icon: IconNodeJS,
			title: 'NodeJS'
		},
		{
			icon: IconSCSS,
			title: 'SCSS'
		},
		{
			icon: IconPostCSS,
			title: 'PostCSS'
		},
		{
			icon: IconCapacitorJS,
			title: 'CapacitorJS'
		},
		{
			icon: IconSQL,
			title: 'SQL'
		},
		{
			icon: IconGraphQL,
			title: 'GraphQL'
		},
		{
			icon: IconFirebase,
			title: 'Firebase'
		}
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
				<svelte:component this={icon} />
			</span>
			<span class="uppercase text-xs font-semibold">{title}</span>
		</div>
	{/each}
</div>
