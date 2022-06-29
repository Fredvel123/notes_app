import jwt from "jsonwebtoken";
import { envVar } from '../../../config/dotenv/index.js';

export const jwtValidate = (req, res, next) => {
    const _token = req.headers['access-token'];
    if(_token) {
        jwt.verify(_token, envVar.secretKeyJWT, (err, payload) => {
            if(err) {
                res.json({
                    auth: false,
                    message: 'your token is not valid'
                })
            }else {
                req.id = payload.id
                next()
            }
        } );
    }else {
        res.json({
            auth: false, 
            message: "You don't have a access token"
        })
    }
}