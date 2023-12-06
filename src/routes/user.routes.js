import { Router } from "express";
import { loginHandle, registerHandle } from "../controller/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js"
const router = Router()
router.route("/register").post( upload.fields([
    {
        name: "avatar",
        maxCount: 1
    }, 
    {
        name: "coverImage",
        maxCount: 1
    }
]),registerHandle)

router.route('/login').post(loginHandle)
export default router