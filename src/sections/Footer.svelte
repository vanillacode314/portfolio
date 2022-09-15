<script lang="ts">
	interface Link {
		title: string;
		href: string;
	}
	const links: Link[] = [
		{
			title: "Blog",
			href: "/blog",
		},
	];

	const socials: Link[] = [
		{
			title: "Email",
			href: "mailto:raqueebuddin.aziz.314@gmail.com",
		},
		{
			title: "Instagram",
			href: "https://www.instagram.com/raqueebuddin.aziz",
		},
		{
			title: "Facebook",
			href: "https://www.facebook.com/vanillacode314",
		},
		{
			title: "Twitter",
			href: "https://twitter.com/RaqueebuddinA",
		},
	];
</script>

<footer class="footer">
	<div class="container grid">
		<section>
			<a class="logo" href="/" aria-label="home">
				Raqueebuddin<br />Aziz
			</a>
		</section>
		<section>
			<h3>Links</h3>
			<ul class="nav-list">
				{#each links as { title, href } (href)}
					<li class="nav-item">
						<a {href}>{title}</a>
					</li>
				{/each}
			</ul>
		</section>
		<section>
			<h3>Social</h3>
			<ul class="social-list">
				{#each socials as { title, href } (href)}
					<li class="social-item">
						<a {href}>{title}</a>
					</li>
				{/each}
			</ul>
		</section>
	</div>
</footer>

<style lang="postcss">
	.footer {
		a {
			all: unset;
			cursor: pointer;
			color: var(--color-1);
			text-decoration: underline;
			&:is(:hover, :focus) {
				color: var(--color-3);
			}
		}
		padding: var(--large-gap) var(--gap);
		background-color: rgb(0 0 0 / 5%);
		.grid {
			gap: var(--large-gap);
		}
		section {
			grid-column: span 4;
			@media (--md-n-below) {
				grid-column: span 12;
			}
		}
		ul {
			display: grid;
			gap: var(--smaller-gap);
			text-transform: uppercase;
		}
		h3 {
			text-transform: uppercase;
			font-family: var(--font-family);
			font-weight: 700;
			font-size: var(--font-size-0);
			margin-block-end: var(--small-gap);
		}
		.logo {
			/* font-weight: 600; */
			font-size: 18px;
			text-transform: uppercase;
			font-family: var(--headline-family);
		}
		a.logo {
			text-decoration: none;
			color: black;
		}
	}
</style>
