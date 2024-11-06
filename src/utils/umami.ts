function trackScroll(
	id: string,
	data: Record<string, string> = {},
	{ thresholdPixels = 100 }: Partial<{ thresholdPixels: number }> = {}
) {
	const el = document.getElementById(id)
	if (!el) {
		if (import.meta.env.DEV) console.error('Element not found')
		return
	}
	if (import.meta.env.DEV)
		console.log('Scroll Tracking Activated', { id, el, data, thresholdPixels })
	const onScroll = () => {
		const scrollPos = window.scrollY - el.offsetTop
		if (scrollPos > thresholdPixels) {
			window.removeEventListener('scroll', onScroll)
			window.umami.track(`scrolled-past-${id}`, { ...data, threshold: thresholdPixels })
		}
	}
	window.addEventListener('scroll', onScroll)
	return () => window.removeEventListener('scroll', onScroll)
}

export { trackScroll }
