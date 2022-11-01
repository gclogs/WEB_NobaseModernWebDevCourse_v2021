import fp from 'fastify-plugin';
import mongodb from 'mongodb';

const MongoClient = mongodb.MongoClient;

async function database(fastify: any, options: any) {
  const url = options.url
  delete options.url

  const db = await MongoClient.connect(url, options)
  fastify.decorate('mongo', db);
}

export default fp(database);