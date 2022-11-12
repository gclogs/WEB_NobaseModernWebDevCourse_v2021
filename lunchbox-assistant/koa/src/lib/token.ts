import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';

dotenv.config({ path: '.env' })
const { SECRET_JWT } = process.env;

function generateToken(payload) {
  return new Promise(
    (resolve, reject) => {
      jwt.sign(
        payload,
        jwtSecret,
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

export default generateToken;