import Joi from 'joi';
import Account from '../../../schema/accountSchema';

const AuthCtrl = {
  async localRegister(ctx) {
    const schema = Joi.object().keys({
      username: Joi.string().alphanum().min(4).max(15).required(),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6)
    });

    const result = schema.validate(ctx.request.body);
    
    if (result.error) {
      ctx.status = 400;
      return;
    }

    let exist = null; // 아이디 & 이메일 중복 체크
    try {
      exist = await Account.findByEmailOrUsername(ctx.request.body);
    } catch (e) {
      ctx.throw(500, e);
    }

    if (exist) {
      ctx.status = 409;
      ctx.body = {
        key: exist.email === ctx.request.body.email ? 'email' : 'username'
      }
      return;
    }
    
    let account = null;
    try {
      account = await Account.localRegister(ctx.request.body);
    } catch(e) {
      ctx.throw(500, e);
    }

    let token = null;
    try {
      token = account.generateToken();
    } catch (e) {
      ctx.throw(500, e);
    }

    ctx.cookies.set('access_token', token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 });
    ctx.body = account.profile;
  },

  async localLogin(ctx) {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);

    if (result.error) {
      ctx.status = 400;
      return;
    }

    const { email, password } = ctx.request.body;

    let account = null;
    try {
      account = await Account.findByEmail(email);
    } catch (e) {
      ctx.throw(500, e)
    }

    if (!account || !account.validatePassword(password)) {
      ctx.status = 403;
      return;
    }

    let token = null;
    try {
      token = await account.generateToken();
    } catch (e) {
      ctx.throw(500, e);
    }

    ctx.cookies.set('access_token',  { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 * 7 })
    ctx.body = account.profile;
  },

  async exists(ctx) {
    const { key, value } = ctx.params;
    let account = null;

    try {
      account = await (key === 'email'?Account.findByEmail(value):Account.findByUsername(value));
    } catch (e) {
      ctx.throw(500, e);
    }

    ctx.body = {
      exists: account !== null
    }
  },

  logout(ctx) {
    ctx.cookies.set('access_token', null, {
      maxAge: 0, 
      httpOnly: true
    });
    ctx.status = 204;
  },

  checkUser(ctx) {
    const { user } = ctx.request;

    if (!user) {
      ctx.status = 403;
      return;
    }

    ctx.body = user.profile;
  }
}

export default AuthCtrl;