import Router from 'koa-router';

const books = new Router();

books.get('/books', async ctx => {
  ctx.body = 'GET ' + ctx.request.path;
  console.log('test')
})

export default books;