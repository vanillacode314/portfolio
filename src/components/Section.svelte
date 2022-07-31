<script lang="ts">
	import { setContext } from 'svelte';

	/// STATE ///
	export let name: string;
	export let dark: boolean = false;
	export let fluid: boolean = false;
	$: setContext('dark', dark);
</script>

<section
	class="p-5 gap-5 grid {dark
		? `bg-gray-100 dark:bg-gray-800`
		: `dark:bg-gray-100 bg-gray-800`} snap-start"
	id={name.toLowerCase()}
>
	<header>
		<h2
			class="text-2xl font-semibold {dark
				? `dark:text-white text-gray-800`
				: `text-white dark:text-gray-800`} lg:text-3xl basis-full text-center"
		>
			<a aria-label="goto {name}" class="underline" href="#{name.toLowerCase()}">#</a>
			{name}
		</h2>
	</header>
	<div class={!fluid ? 'max-w-5xl mx-auto' : 'contents'}>
		<slot />
	</div>
</section>
