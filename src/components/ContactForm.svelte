<section
	class="w-full max-w-2xl px-6 py-4 mx-auto dark:bg-white rounded-md shadow-md bg-gray-800"
>
	<h2 class="text-3xl font-semibold text-center dark:text-gray-800 text-white">
		Get in touch
	</h2>
	<p class="mt-3 text-center dark:text-gray-600 text-gray-400">
		Get a reply in under 24hrs
	</p>

	<div class="grid grid-cols-1 gap-6 mt-6">
		<a
			href="mailto:raqueebuddin.aziz.314@gmail.com"
			class="flex flex-col items-center px-4 py-3 dark:text-gray-700 transition-colors duration-200 transform rounded-md text-gray-200 dark:hover:bg-blue-200 hover:bg-blue-500"
		>
			<div class="i-mdi-email-outline" />

			<span class="mt-2">raqueebuddin.aziz.314@gmail.com</span>
		</a>
	</div>

	<div class="mt-6 ">
		<form
			data-netlify="true"
			name="contact"
			method="POST"
			class="flex flex-col gap-5"
		>
			<input type="hidden" name="form-name" value="contact" />
			<div class="items-center flex md:flex-row flex-col gap-5">
				<div class="w-full">
					<label
						for="name"
						class="block mb-2 text-sm font-medium dark:text-gray-600 text-gray-200"
						>Your Name</label
					>

					<input
						class="block w-full px-4 py-2 dark:text-gray-700 dark:bg-white border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 dark:focus:ring-blue-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						id="name"
						name="name"
						type="text"
						required
					/>
				</div>

				<div class="w-full">
					<label
						for="email"
						class="block mb-2 text-sm font-medium dark:text-gray-600 text-gray-200"
						>Your E-mail</label
					>

					<input
						class="block w-full px-4 py-2 dark:text-gray-700 dark:bg-white border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 dark:focus:ring-blue-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
			</div>

			<div class="w-full mt-4">
				<label
					class="block mb-2 text-sm font-medium dark:text-gray-600 text-gray-200"
					for="message">Message</label
				>

				<textarea
					class="block w-full px-4 py-2 dark:text-gray-700 dark:bg-white border rounded-md bg-gray-800 text-gray-300 border-gray-600 focus:border-blue-400 dark:focus:ring-blue-300 focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
					name="message"
					id="message"
					required
				/>
			</div>

			<div class="flex justify-center mt-6">
				<button
					class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
					>Send Message</button
				>
			</div>
		</form>
	</div>
</section>
