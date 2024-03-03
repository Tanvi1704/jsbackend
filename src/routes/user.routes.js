import {Router}  from 'express';
import { registerUser } from '../controllers/user.controller';
import {upload}  from '../middlewares/multer.middleware.js'

const router=Router()

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },{
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser)
// router.route('/login').post(loginUser)
//issa kya hogi ki jo username tah uska baad ya bhi attach ho jayega 

export default router