import dotenv from 'dotenv';
dotenv.config()

export const envVar = {
    secretKeyJWT: process.env.SECRET_KEY_JWT
}