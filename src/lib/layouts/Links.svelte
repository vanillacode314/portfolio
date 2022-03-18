<script lang="ts">
	import { Card } from 'spaper';

	const links = [
		{
			url: 'https://github.com/vanillacode314',
			label: 'Github (vanillacode314)'
		},
		{
			url: 'https://gitlab.com/vanillacode',
			label: 'Gitlab (vanillacode)'
		},
		{
			url: 'https://t.me/vanillacode314',
			label: 'Telegram (vanillacode314)'
		},
		{
			url: 'https://m.me/vanillacode314',
			label: 'Facebook (vanillacode314)'
		}
	];
</script>

<Card header="Links" id="links">
	<ul>
		{#each links as link (link.url)}
			<li>
				<a rel="external" href={link.url}>{link.label}</a>
			</li>
		{/each}
		<li>
			<a rel="external" href="https://discord.com/app">Discord (Raqueebuddin Aziz#6187)</a>
			<small>
				<em
					>(This is not a link to my discord profile it will redirect you to discord you would need
					to enter my discord tag to add me as a friend)</em
				>
			</small>
		</li>
	</ul>
</Card>
