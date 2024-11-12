import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = async ({ url }) => {
	const url2 = url.searchParams.get('url')
	if (!url2) return new Response('url is required', { status: 400 })
	const response = await fetch(url2)
	const contentType = response.headers.get('content-type')
	const buffer = Buffer.from(await response.arrayBuffer())
	const headers = Object.fromEntries(response.headers.entries())
	return new Response(buffer, {
		status: response.status,
		headers: { ...headers, 'Content-Type': contentType ?? 'application/octet-stream' }
	})
}
