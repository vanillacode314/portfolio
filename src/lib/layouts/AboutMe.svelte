<script lang="ts">
	import { Card } from 'spaper';
</script>

<Card header="About Me" id="about">
	<div>
		<img src="https://picsum.photos/200" alt="profile" width="200" height="200" />
		<span>
			<h4>Raqueebuddin Aziz (Web Developer)</h4>
			<p>
				Hi, I am Raqueebuddin Aziz, I freelance as a <strong>Web Developer</strong>.
			</p>
			<p>
				Hire me to craft an amazing online identity for your business through <strong
					>websites</strong
				>
				and
				<strong>mobile apps</strong> and help you succeed in the digital age :)
			</p>
		</span>
	</div>
</Card>

<style lang="scss">
	img {
		width: 100%;
	}
	div {
		gap: 1rem;
		display: grid;
		grid-template-columns: auto 1fr;
		@media screen and (max-width: 850px) {
			grid-template-columns: 1fr;
		}
	}
</style>
