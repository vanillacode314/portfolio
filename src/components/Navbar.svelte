<nav>
	<a class="logo" href="/" aria-label="home">
		Raqueebuddin<br />Aziz
	</a>
	<ul class="nav-list">
		<li class="nav-item"><a href="#testimonials">testimonials</a></li>
		<li class="nav-item"><a href="#projects">projects</a></li>
		<li class="nav-item"><a class="nav-button" href="#contact">contact</a></li>
	</ul>
</nav>

<style lang="postcss">
	a {
		text-decoration: none;
		color: black;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: start;
	}
	.logo {
		font-weight: 600;
		font-size: 18px;
		text-transform: uppercase;
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
		.nav-item :not(.nav-button) {
			display: none;
		}
	}
</style>
