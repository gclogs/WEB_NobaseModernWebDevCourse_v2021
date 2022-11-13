import Router from 'koa-router';
import BlogCtrl from './blog.ctrl';

const blogs = new Router();

blogs.get('/', BlogCtrl.list);
blogs.post('/', BlogCtrl.create);
blogs.delete('/:id', BlogCtrl.remove);

export default blogs;