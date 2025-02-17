import { defineMiddleware, sequence } from 'astro:middleware'

const compression = defineMiddleware(async ({ request }, next) => {
	const response = await next()

	if (!response.body) {
		return response
	}

	const contentType = response.headers.get('Content-Type')
	const isCompressible =
		contentType &&
		(contentType.includes('text/') ||
			contentType.includes('application/json') ||
			contentType.includes('application/javascript') ||
			contentType.includes('application/xml'))

	if (!isCompressible) {
		return response
	}

	const acceptEncoding = request.headers.get('Accept-Encoding') || ''
	let compressionType = ''

	const acceptedEncodings = acceptEncoding
		.split(',')
		.map((encoding) => encoding.trim().toLowerCase())

	if (acceptedEncodings.includes('br')) {
		compressionType = 'br'
	} else if (acceptedEncodings.includes('gzip')) {
		compressionType = 'gzip'
	} else if (acceptedEncodings.includes('deflate')) {
		compressionType = 'deflate'
	}

	if (!compressionType) {
		return response
	}

	const compressedBody = response.body.pipeThrough(
		new CompressionStream(compressionType as CompressionFormat)
	)
	const newHeaders = new Headers(response.headers)
	newHeaders.set('Content-Encoding', compressionType)

	return new Response(compressedBody, {
		status: response.status,
		statusText: response.statusText,
		headers: newHeaders
	})
})

export const onRequest = sequence(compression)
