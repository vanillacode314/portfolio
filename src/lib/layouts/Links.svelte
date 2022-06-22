<script lang="ts">
	import { Card } from 'spaper';
	import IconGithub from '~icons/mdi/github';
	import IconGitlab from '~icons/mdi/gitlab';
	import IconTelegram from '~icons/mdi/telegram';
	import IconFacebook from '~icons/mdi/facebook';
	import IconDiscord from '~icons/mdi/discord';
	import IconFiverr from '~icons/jam/fiverr';
	import IconUpwork from '~icons/bxl/upwork';
	import IconLinkedin from '~icons/mdi/linkedin';
	import IconEmail from '~icons/mdi/email';

	const links = [
		{
			icon: IconEmail,
			url: 'mailto:raqueebuddin.aziz.314@gmail.com',
			label: 'Email (raqueebuddin.aziz.314@gmail.com)'
		},
		{
			icon: IconFiverr,
			url: 'https://www.fiverr.com/vanillacode',
			label: 'Fiverr (vanillacode)'
		},
		{
			icon: IconUpwork,
			url: 'https://www.upwork.com/freelancers/~0161b549d2e53b3f8a',
			label: 'Upwork (Raqueebuddin Aziz)'
		},

		{
			icon: IconLinkedin,
			url: 'https://www.linkedin.com/in/raqueebuddin-aziz-b28a12232/',
			label: 'Linkedin (Raqueebuddin Aziz)'
		},
		{
			icon: IconGithub,
			url: 'https://github.com/vanillacode314',
			label: 'Github (vanillacode314)'
		},
		{
			icon: IconGitlab,
			url: 'https://gitlab.com/vanillacode',
			label: 'Gitlab (vanillacode)'
		},
		{
			icon: IconTelegram,
			url: 'https://t.me/vanillacode314',
			label: 'Telegram (vanillacode314)'
		},
		{
			icon: IconFacebook,
			url: 'https://m.me/vanillacode314',
			label: 'Facebook (vanillacode314)'
		}
	];
</script>

<Card header="Links" id="links">
	<ul>
		{#each links as link (link.url)}
			<li>
				<a rel="external" target="_blank" href={link.url}>
					<svelte:component this={link.icon} style="font-size:2em;" />
					<span>
						{link.label}
					</span></a
				>
			</li>
		{/each}
		<li>
			<a rel="external" target="_blank" href="https://discord.com/app">
				<IconDiscord style="font-size:2em;" />
				<span> Discord (Raqueebuddin Aziz#6187) </span></a
			>
			<span>
				<small>
					<em
						>(This is not a link to my discord profile it will redirect you to discord you would
						need to enter my discord tag to add me as a friend)</em
					>
				</small>
			</span>
		</li>
	</ul>
</Card>

<style lang="scss">
	ul {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
		margin: 0;
		padding: 0;
		align-items: start;
		li {
			transition: 0.2s transform ease-in-out;
			&:hover {
				transform: scale(1.1);
			}
			a {
				display: contents;
				span {
					text-decoration: underline;
					text-decoration-style: wavy;
				}
			}
			&::before {
				all: unset;
			}
			display: grid;
			gap: 0.5rem;
			justify-items: center;
		}
		span {
			font-size: medium;
			text-align: center;
		}
	}
</style>
