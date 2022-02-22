<script lang="ts">
	/// Components
	import { Navbar, Button } from 'spaper';

	import { toggleDarkMode } from '$lib/utils';
</script>

<Navbar>
	<h3 slot="brand">
		<a href="/">VanillaCode</a>
	</h3>
	<ul class="inline">
		<li><a href="#projects">Projects</a></li>
		<li><a href="#about">About</a></li>
		<li><a href="/hire">Hire</a></li>
	</ul>
</Navbar>
