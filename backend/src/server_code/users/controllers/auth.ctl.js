import UsersDB from '../models/users.models.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { envVar } from '../../../config/dotenv/index.js'

// sign in - create new user
export const createNewUser = async (req, res) => {
    const {email, password, username} = req.body;
    const userExists = await UsersDB.findOne({where: {email}});
    if (userExists) {
        res.json({
            state: 500,
            isCreated: false,
            message: 'The email is already used, please add a new email'
        })
    } else {
        if(email) {
            const usernameUsed = await UsersDB.findOne({where: {username}})
            if(!usernameUsed) { // user name no exists
                if (username.length > 5 && username.length <= 30) {
                    if( password.length > 5 && password.length < 25) {
                        try {
                            const passwordHashed = await bcrypt.hash(password, 10);
                            const newUser = await UsersDB.create({
                                password: passwordHashed,
                                email,
                                username,
                                email_confirmed: false,
                                key_confirm_email: '' // create a function to add a code random
                            })
                            res.json({
                                status: 200,
                                isCreated: true,
                                message: "Your account was created successfully",
                                data: newUser
                            })
                        } catch (err) {
                            res.send(err)
                        }
                    }else {
                        res.json({
                            status: 500,
                            isCreated: false,
                            message: "Your password must be greater than 5 and less than 25 characteres"
                        })
                    }
                }else {
                    res.json({
                        status: 500,
                        isCreated: false,
                        message: 'Username must be greater than 5 and less than 30 characteres'
                    })
                }
            }else { // username exists
                res.json({
                    status: 500,
                    isCreated: false,
                    message: 'Username is already used, please add a different username'
                })
            }
        } else {
            res.json({
                status: 500, 
                isCreated: false,
                message: 'No email. Please add your email to register your account' 
            })
        }
    }
};

// login user created
export const logInUser = async (req, res) => {
    const { email, password } = req.body
    const user = await UsersDB.findOne({where: {email}});
    if(user) {
        const passwordValid = await bcrypt.compare(password, user.password);
        if(passwordValid) {
            const token = jwt.sign(
                {id: user.id}, 
                envVar.secretKeyJWT, 
                {expiresIn: 60*60*24*14}  
            )
            res.json({
                auth: true,
                token
            })
        }else {
            res.json({
                auth: false,
                message: "your passoword is not correct"
            })
        }
    } else {
        res.json({
            auth: false,
            message: 'email incorrect, please make sure your email is correct'
        })
    }
}