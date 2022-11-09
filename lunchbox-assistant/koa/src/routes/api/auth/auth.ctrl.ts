import Joi from 'joi';
import Account from '../../../../schema/accountSchema';

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

  let exist = null;
  try {
    exist = await Account;
    exist.findByEmailOrUsername(ctx.request.body);
    console.log(exist);
  } catch (e) {
    ctx.thorw(500, e);
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
    account = await Account;
    account.localRegister(ctx.request.body);
    console.log(result)
  } catch(e) {
    ctx.throw(500, e);
  }

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
      account = await Account;
      account.findByEmail(email);
      console.log(account);
    } catch (e) {
      ctx.throw(500, e)
    }

    if (!account || !account.validatePassword(password)) {
      ctx.status = 403;
      return;
    }

    ctx.body = account.profile;
  },

  async exists(ctx) {
    const { key, value } = ctx.params;
    let account = null;
    let result = null;

    try {
      account = await Account;
      result = (key === 'email'?account.findByEmail(value):account.findByUsername(value))
      console.log(result);
    } catch (e) {
      ctx.throw(500, e);
    }

    ctx.body = {
      exists: account !== null
    }
  },

  logout(ctx) {
    ctx.body = 'logout'
  }
}

export default AuthCtrl;