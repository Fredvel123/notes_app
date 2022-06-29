import UsersDB from '../models/users.models.js';
import bcrypt from 'bcryptjs';

export const getAllUsers = async (_req, res) => {
    try {
        const users = await UsersDB.findAll();
        if(users.length > 0) {
            res.json(users)
        }else {
            res.json({message: 'there are no users yet'})
        }
    } catch (err) {
        res.json(err)
    }
}

export const removeUser = async (req, res) => {
    const id = req.id;
    const { password } = req.body;
    const user = await UsersDB.findOne({where: {id}})
    const validPassword = await bcrypt.compare(password, user.password);
    if(validPassword) {
        try {
            await UsersDB.destroy({where: {id}})
            res.json({
                status: 200,
                isRemoved: true
            })
        } catch (err) {
            res.send(err)
        }
    }else {
        res.json({
            status: 500,
            isRemoved: false,
            message: 'Your password is not correct'
        })
    }
}