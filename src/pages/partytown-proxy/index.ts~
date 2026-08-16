import type { APIRoute } from 'astro'

export const prerender = false

export const GET: APIRoute = async ({ url }) => {
	const targetUrl = url.searchParams.get('url')
	if (!targetUrl) return new Response('url is required', { status: 400 })
	const response = await fetch(targetUrl)

	const headers = {} as Record<string, string>
	headers['Content-Type'] = response.headers.get('content-type') ?? 'application/octet-stream'
	headers['Cache-Control'] = response.headers.get('cache-control') ?? 'max-age=300, private'

	return new Response(response.body, {
		status: response.status,
		headers
	})
}
