import fastifyMiddie from '@fastify/middie'
import Fastify from 'fastify'
import { fileURLToPath } from 'node:url'
import { handler as ssrHandler } from './dist/server/entry.mjs'

const app = Fastify({ logger: true })

await app.register(fastifyMiddie)
app.use(ssrHandler)

app.listen({ port: 8081 }, (err, address) => {
	if (err) {
		console.error(err)
		process.exit(1)
	}
	console.log(`Server listening at ${address}`)
})
