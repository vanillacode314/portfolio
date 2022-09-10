<nav>
	<span class="logo">
		Raqueebuddin<br />Aziz
	</span>
	<ul class="nav-list">
		<li class="nav-item"><a href="#testimonials">testimonials</a></li>
		<li class="nav-item"><a href="#projects">projects</a></li>
		<li class="nav-item"><a class="nav-button" href="#contact">contact</a></li>
	</ul>
</nav>

<style>
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
	.nav-item a {
		text-decoration: none;
		color: black;
	}
	.nav-item a:is(:hover, :focus) {
		text-decoration: underline;
	}
	.nav-item a.nav-button {
		background-color: black;
		color: white;
		padding: calc(var(--gap) / 2) var(--gap);
		border-radius: 50px;
		border: 1px solid black;
	}
</style>
