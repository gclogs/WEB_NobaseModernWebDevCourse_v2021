import Koa from 'koa';
import Router from 'koa-router';
import BodyParser from 'koa-bodyparser';
import api from './routes/api'
import Token from './lib/token';
import mongoDB from './mongoose';

const token = new Token();
const app = new Koa();
const router = new Router();
const db = new mongoDB();

db.conn();

app.use(BodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.use(token.jwtMiddleware)

router.use('/api', api.routes());

app.listen(4000, () => {
  console.log(`Listening to port 4000`)
})