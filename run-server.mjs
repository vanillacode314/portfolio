import fastifyMiddie from '@fastify/middie'
import fastifyStatic from '@fastify/static'
import Fastify from 'fastify'
import { fileURLToPath } from 'node:url'
import { handler as ssrHandler } from './dist/server/entry.mjs'

const app = Fastify({ logger: true })

await app
	.register(fastifyStatic, {
		root: fileURLToPath(new URL('./dist/client', import.meta.url)),
		preCompressed: true
	})
	.register(fastifyMiddie)
app.use(ssrHandler)

app.listen(
	{
		host: process.env.HOST || '127.0.0.1',
		port: process.env.PORT || 3000
	},
	(err, address) => {
		if (err) {
			console.error(err)
			process.exit(1)
		}
		console.log(`Server listening at ${address}`)
	}
)
