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
					<a {href}>
						<li class="social-item">{title}</li>
					</a>
				{/each}
			</ul>
		</section>
	</div>
</footer>

<style lang="postcss">
	.footer {
		padding: var(--large-gap) var(--gap);
		background-color: rgb(0 0 0 / 5%);
		.grid {
			gap: var(--gap);
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
		}
		h3 {
			font-family: var(--font-family);
			font-size: var(--font-size-4);
			margin-bottom: var(--small-gap);
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
