import { Router } from "express";
import {registerHandle} from "../controller/user.controller.js";
const router = Router()


router.route("/register").post(registerHandle)
export default router