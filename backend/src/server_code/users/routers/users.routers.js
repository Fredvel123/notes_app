import { Router } from "express";
const router = Router();
// controllers
import { getAllUsers, removeUser } from "../controllers/users.ctl.js";
import { jwtValidate } from "../middlewares/jwt.valitation.js";


router.get('/all', getAllUsers);
router.delete('/remove', jwtValidate, removeUser);

export default router;


