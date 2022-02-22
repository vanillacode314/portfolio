<script lang="ts" context="module">
	export const prerender = true;
</script>

<script>
	import AboutMe from '$lib/layouts/AboutMe.svelte';
	import Landing from '$lib/layouts/Landing.svelte';
	import Projects from '$lib/layouts/Projects.svelte';
	import { Card } from 'spaper';
	import { Form, Input, Button } from 'spaper';
</script>

<Landing />
<AboutMe />
<Projects />

<section class="contact" id="contact">
	<Card header="Contact Me">
		<Form method="POST" name="contact" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<Input label="Name" name="name" placeholder="name" type="text" class="margin-bottom-small" />

			<Input
				label="Your Email"
				name="email"
				placeholder="email"
				type="email"
				class="margin-bottom-small"
			/>
			<Input
				label="Message"
				name="message"
				placeholder="message"
				type="textarea"
				class="margin-bottom-small"
			/>

			<Button type="secondary" class="margin-top-small">Send</Button>
		</Form>
	</Card>
</section>
<section class="links" id="links">
	<Card header="Links">
		<ul>
			<li>
				<a rel="external" href="https://github.com/vanillacode314">Github</a>
			</li>
			<li>
				<a rel="external" href="https://gitlab.com/vanillacode">Gitlab</a>
			</li>
			<li>
				<a rel="external" href="https://discordapp.com/users/943908202846756874/">Discord</a>
			</li>
			<li>
				<a rel="external" href="https://t.me/vanillacode314">Telegram</a>
			</li>
		</ul>
	</Card>
</section>
