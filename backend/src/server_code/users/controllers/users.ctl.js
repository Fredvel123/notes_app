import UsersDB from '../models/users.models.js';

export const getAllUsers = async (req, res) => {
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