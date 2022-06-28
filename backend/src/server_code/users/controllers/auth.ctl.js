import UsersDB from '../models/users.models.js';
import bcrypt from 'bcryptjs';

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
                                username
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
