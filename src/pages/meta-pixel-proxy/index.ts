import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = async ({ url }) => {
	const url2 = url.searchParams.get('url')
	if (!url2) return new Response('url is required', { status: 400 })
	const response = await fetch(url2)
	return new Response(response.body, { status: 200 })
}
