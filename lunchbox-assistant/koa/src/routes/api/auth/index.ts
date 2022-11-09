import Router from 'koa-router';
import AuthCtrl from './auth.ctrl';

const auth = new Router();

auth.post('/register/local', AuthCtrl.localRegister);
auth.post('/login/local', AuthCtrl.localLogin);
auth.get('/exists/:key(email|username)/:value', AuthCtrl.exists);
auth.post('/logout', AuthCtrl.logout)

export default auth;