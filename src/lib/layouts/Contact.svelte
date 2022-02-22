<script>
	import { Card, Form, Input, Button } from 'spaper';
</script>

<Card header="Contact Me" id="contact">
	<Form method="POST" name="contact" data-netlify="true">
		<input type="hidden" name="form-name" value="contact" />
		<Input
			label="Name"
			name="name"
			placeholder="name"
			type="text"
			class="margin-bottom-small"
			required
		/>

		<Input
			label="Your Email"
			name="email"
			placeholder="email"
			type="email"
			class="margin-bottom-small"
			required
		/>
		<Input
			label="Message"
			name="message"
			placeholder="message"
			type="textarea"
			class="margin-bottom-small"
			required
		/>

		<Button type="secondary" class="margin-top-small">Send</Button>
	</Form>
</Card>
