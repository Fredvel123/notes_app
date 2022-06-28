import UsersDB from '../models/users.models.js';

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

// export const removeUser = async (req, res) => {
//     const id = req.params;
    
// }