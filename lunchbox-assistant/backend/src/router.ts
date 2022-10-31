async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: '응애'}
  })
}

export default routes;