<script lang="ts">
	export let content: string;
	export let author: string;
</script>

<div class="max-w-md px-8 py-4 dark:bg-white rounded-lg shadow-lg bg-gray-800">
	<p class="mt-2 dark:text-gray-600 text-gray-200">
		{content}
	</p>

	<div class="flex justify-end mt-4">
		<span class="text-xl font-medium dark:text-blue-500 text-blue-300">{author}</span>
	</div>
</div>
