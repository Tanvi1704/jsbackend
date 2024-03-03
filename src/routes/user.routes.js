import {Router}  from 'express';
import { registerUser } from '../controllers/user.controller';

const router=Router()

router.route("/register").post(registerUser)
// router.route('/login').post(loginUser)
//issa kya hogi ki jo username tah uska baad ya bhi attach ho jayega 

export default router