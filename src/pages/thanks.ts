import { trackContact } from '@/utils/facebook'
import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = async ({ request, clientAddress, url, cookies }) => {
	const email = url.searchParams.get('email')
	const fbclid = url.searchParams.get('fbclid')
	const ip = clientAddress
	const userAgent = request.headers.get('user-agent')
	const timestamp = Math.floor(Date.now() / 1000)
	const fbp = cookies.get('_fbp')?.value || null

	if (email && userAgent) {
		trackContact({ email, ip, userAgent, timestamp, fbclid, fbp })
	}
	return new Response(null, { status: 200 })
}
