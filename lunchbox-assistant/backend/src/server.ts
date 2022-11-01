import Fastify from 'fastify'
import router from './router';
import dbConnector from './database';

const fastify = Fastify({
  logger: true
})

fastify.register(dbConnector, {
  url: 'mongodb+srv://gclogs:root123@fastify.rnzkolb.mongodb.net/?retryWrites=true&w=majority',
  useNewUrlParser: true,
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