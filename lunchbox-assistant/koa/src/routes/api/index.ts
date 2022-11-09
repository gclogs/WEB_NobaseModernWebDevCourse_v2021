import Router from 'koa-router';
import books from './books'
import blogs from './blogs';

const api = new Router();

api.use('/books', books.routes());
api.use('/blogs', blogs.routes());

export default api;