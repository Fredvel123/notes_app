import UsersDB from '../models/users.models.js';

// sign in
export const createNewUser = async (req, res) => {
    const {email, password} = req.body;
    const userExists = await UsersDB.findOne({email: {email}});
    
};