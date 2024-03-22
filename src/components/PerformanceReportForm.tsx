import clsx from 'clsx'
import type { Component } from 'solid-js'

export const PerformanceReportForm: Component<{ class?: string }> = (props) => {
	async function onSubmit(event: SubmitEvent) {
		event.preventDefault()

		const BRANCH = (document.querySelector('.branch') as HTMLElement)?.dataset.branch ?? 'unknown'
		const form = event.target as HTMLFormElement
		const formData = Object.fromEntries(new FormData(form).entries()) as Record<string, string>

		fetch(form.action, {
			method: form.method,
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams(formData).toString(),
			redirect: 'manual'
		})
			.then(() => alert('Form successfully submitted'))
			.catch(() => alert('Sorry! There was a problem submitting your form'))

		window.gtag('event', 'generate_lead', {
			event_category: 'Lead Generation',
			event_label: `Performance Form (${BRANCH})`
		})

		fbq('track', 'SubmitApplication')
	}
	return (
		<form
			onSubmit={onSubmit}
			class={clsx(
				'flex flex-col gap-5 rounded-10 bg-white p-5 text-gray-900 border-2 border-orange-600 group-target:ring-3 group-target:ring-orange-600',
				props.class
			)}
			style="box-shadow: #ea580c 0px 5px"
			name="report"
			method="post"
			data-netlify="true"
			data-netlify-honeypot="bot-field"
			action="/"
		>
			<input type="hidden" name="bot-field" />
			<input type="hidden" name="form-name" value="report" />
			<h2 class="mx-auto mb-5 text-center text-lg font-semibold uppercase text-gray-700 md:text-xl">
				<span class="rounded-full bg-orange-600 px-5 font-black text-gray-100">free</span>
				report on how to make your website faster
			</h2>
			<div class="flex flex-col gap-1">
				<label
					for="email-report-footer"
					class="ml-3 text-xs font-semibold uppercase tracking-wide text-gray-600"
				>
					Email
				</label>
				<input
					type="email"
					name="email"
					id="email-report-footer"
					placeholder="name@domain.com"
					class={clsx([
						'rounded-lg w-full min-w-0 px-5 py-3 border-2 border-[--color] focus:outline-none',
						'[--color:theme(colors.gray.300)] hover:[--color:theme(colors.orange.600)] focus:[--color:theme(colors.orange.600)]'
					])}
					style="box-shadow: var(--color) 0px 2px"
					required
				/>
			</div>
			<div class="flex flex-col gap-1">
				<label
					for="address-footer"
					class="ml-3 text-xs font-semibold uppercase tracking-wide text-gray-600"
				>
					Website Address
				</label>
				<input
					type="text"
					name="address"
					id="address-footer"
					placeholder="www.example.com"
					class={clsx([
						'rounded-lg w-full min-w-0 px-5 py-3 border-2 border-[--color] focus:outline-none',
						'[--color:theme(colors.gray.300)] hover:[--color:theme(colors.orange.600)] focus:[--color:theme(colors.orange.600)]'
					])}
					style="box-shadow: var(--color) 0px 2px"
					required
				/>
			</div>
			<button
				class="rounded-lg ml-auto whitespace-nowrap px-5 py-3 font-bold text-orange-600 border-2 border-orange-600 transition hover:bg-orange-600 hover:text-white"
				style="box-shadow: #ea580c 0px 5px"
			>
				Submit
			</button>
		</form>
	)
}

export default PerformanceReportForm
