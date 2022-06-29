import { Router } from 'express'
const router = Router();
// controllers
import { createNewUser, logInUser } from '../controllers/auth.ctl.js';

router.post('/signup', createNewUser)
router.post('/login', logInUser)

export default router;