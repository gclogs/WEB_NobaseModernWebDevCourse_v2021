import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import api from './routes/api'
import mongoDB from './mongoose';

const app = new Koa();
const router = new Router();
const db = new mongoDB();

db.conn();

app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.use('/api', api.routes());

app.listen(4000, () => {
  console.log(`Listening to port 4000`)
})