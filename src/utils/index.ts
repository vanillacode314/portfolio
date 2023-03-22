export const sleep = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))

export function submitFormWithoutListener(
	form: HTMLFormElement,
	handler: (e: SubmitEvent) => void
) {
	form.removeEventListener('submit', handler)
	form.submit()
	form.addEventListener('submit', handler)
}
