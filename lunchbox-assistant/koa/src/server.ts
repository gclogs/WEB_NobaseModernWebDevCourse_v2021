import Koa from 'koa';
import Router from 'koa-router';
import api from './routes/api/index.js'

const app = new Koa();
const router = new Router();

router.use('/api', api.routes())

app.use((ctx) => {
  ctx.body = "Hello world";
})

app.listen(4000, () => {
  console.log(`Listening to port 4000`)
})