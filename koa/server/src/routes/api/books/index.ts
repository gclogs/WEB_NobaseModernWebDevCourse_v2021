import Router from 'koa-router';
import BookCtrl from './books.ctrl'

const books = new Router();

books.get('/', BookCtrl.list);
books.get('/:id', BookCtrl.get);
books.delete('/:id', BookCtrl.remove);
books.post('/', BookCtrl.create);

export default books;