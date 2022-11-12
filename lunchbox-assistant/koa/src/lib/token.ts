import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: '.env' })
const { SECRET_JWT } = process.env;


class Token {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  generateToken(...payload) {
    return new Promise(
      (resolve, reject) => {
        jwt.sign(
          payload,
          SECRET_JWT,
          {
            expiresIn: '7d'
          }, (error, token) => {
            if (error) reject(error);
            resolve(token);
          }
        )
      }
    )
  }

  decodeToken(token) {
    return new Promise(
      (resolve, reject) => {
        jwt.verify(token, SECRET_JWT, (error, decoded) => {
          if (error) reject(error);
          resolve(decoded)
        })
      }
    )
  }

  async jwtMiddleware(ctx, next) {
    const token = ctx.cookies.get('access_token');
    if(!token) return next(); // 토큰이 없으면 바로 다음 작업을 진행합니다.

    try {
        const decoded: any = await this.decodeToken(token); // 토큰을 디코딩 합니다

        // 토큰 만료일이 하루밖에 안남으면 토큰을 재발급합니다
        if(Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
            // 하루가 지나면 갱신해준다.
            const { _id, profile } = decoded;
            const freshToken = await this.generateToken({ _id, profile }, 'account');
            ctx.cookies.set('access_token', freshToken, {
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7days
                httpOnly: true
            });
        }

        // ctx.request.user 에 디코딩된 값을 넣어줍니다
        ctx.request.user = decoded;
    } catch (e) {
        // token validate 실패
        ctx.request.user = null;
    }

    return next();
  }
}

export default Token;