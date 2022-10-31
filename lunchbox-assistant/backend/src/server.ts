import Fastify from 'fastify'
import router from './router';

const fastify = Fastify({
  logger: true
})

fastify.register(router)

// Declare a route
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'what' })
})

// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})