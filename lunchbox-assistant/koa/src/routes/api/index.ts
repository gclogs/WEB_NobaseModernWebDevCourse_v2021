import Router from 'koa-router';

const api = new Router();
api.get('/books', async ctx => {
  ctx.body = 'GET ' + ctx.request.path;
})


export default api;