import { model, Schema } from 'mongoose';
import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })

const hash = (password) => crypto.createHmac('sha256', 'root$1$2$3').update(password).digest('hex');

const Account = new Schema({
  profile: {
    username: String,
    thumnail: {
      type: String,
      default: 'static/images/default_thumnail.png'
    },
    email: { type: String },
    social: { // 소셜 계정으로 회원가입시 각 서비스에서 제공되는 id 및 token을 저장
      facebook: {
        id: String,
        token: String
      },
      google: {
        id: String,
        token: String
      }
    },
    password: String, // 로컬 계정의 경우 비밀번호를 해싱해서 저장
    thoughtCount: { // 유저가 서비스에서 포스트를 작성할때마다 1씩 더해짐
      type: Number,
      default: 0
    },
    createdAt: {  // 유저가 가입한 시각
      type: Date,
      default: Date.now
    }
  }
})

Account.statics.findByUsername = function(username) {
  return this.findOne({'profile.usernmae': username}).exec();
}

Account.statics.findByEmail = function(email) {
  return this.findOne({email}).exec();
}

Account.statics.findByEmailOrUsername = function({username, email}) {
  return this.findOne({
    $or: [
      { 'profile.username': username },
      { email }
    ]
  }).exec();
}

Account.statics.localRegister = function({ username, email, password }) {
  const account = new this({
    profile: {
      username
    },
    email,
    password: hash(password)
  })

  return account.save()
}

Account.methods.validatePassword = function(password) {
  const hashed = hash(password);
  return this.password === hashed;
}

export default model('Account', Account);