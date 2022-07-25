<script lang="ts">
	import IconMenu from '~icons/mdi/menu';
	let menuOpen: boolean = false;

	function toggleMenu() {
		menuOpen = !menuOpen;
	}
</script>

<header class="bg-white dark:bg-gray-800">
	<nav class="px-6 py-4 shadow">
		<div class="lg:items-center lg:justify-between lg:flex">
			<div class="flex items-center justify-between">
				<div>
					<a
						class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
						href="/">VanillaCode</a
					>
				</div>

				<!-- Mobile menu button -->
				<div class="lg:hidden">
					<button
						type="button"
						class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
						aria-label="Toggle menu"
						on:click={toggleMenu}
					>
						<IconMenu />
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div class="flex flex-col mt-2 -mx-2 lg:mt-0 lg:flex-row lg:block" class:hidden={!menuOpen}>
				<a
					href="/"
					class="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
					>Home</a
				>
				<a
					href="#testimonials"
					class="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
					>Testimonials</a
				>
				<a
					href="#projects"
					class="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
					>Projects</a
				>
				<a
					href="#contact"
					class="px-2 py-2 text-sm text-gray-800 rounded-md dark:text-gray-200 hover:bg-gray-900 hover:text-gray-100 hover:font-medium lg:mx-2"
					>Contact</a
				>
			</div>
		</div>
	</nav>
</header>
