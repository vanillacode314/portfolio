<script lang="ts">
	export let route: string;
	interface Link {
		title: string;
		href: string;
		showOnMobile?: boolean;
		on?: string;
	}
	const links: Link[] = [
		{
			on: "/",
			title: "testimonials",
			href: "#testimonials",
		},
		{
			on: "/",
			title: "projects",
			href: "#projects",
		},
		{
			showOnMobile: true,
			title: "blog",
			href: "/blog",
		},
	];

	let filteredLinks: Link[] = [];
	$: {
		filteredLinks = links.filter(
			(link) => link.on === undefined || link.on === route
		);
	}
</script>

<nav>
	<a class="logo" href="/" aria-label="home">
		Raqueebuddin<br />Aziz
	</a>
	<ul class="nav-list">
		{#each filteredLinks as { title, href, on, showOnMobile } (href)}
			<li class="nav-item" class:dont-hide={showOnMobile}>
				<a {href}>{title}</a>
			</li>
		{/each}
		<li class="nav-item"><a class="nav-button" href="#contact">contact</a></li>
	</ul>
</nav>

<style lang="postcss">
	nav {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	a {
		text-decoration: none;
		color: black;
	}
	.logo {
		/* font-weight: 600; */
		font-size: 18px;
		text-transform: uppercase;
		font-family: var(--headline-family);
	}
	.nav-list {
		display: flex;
		gap: var(--gap);
	}
	.nav-item {
		a {
			text-decoration: none;
			color: black;
			&:is(:hover, :focus) {
				text-decoration: underline;
			}
			&.nav-button {
				background-color: black;
				color: white;
				padding: calc(var(--gap) / 2) var(--gap);
				border-radius: 50px;
				border: 1px solid black;
			}
		}
	}
	@media (--sm-n-below) {
		.nav-item:not(.dont-hide) :not(.nav-button) {
			display: none;
		}
	}
</style>
