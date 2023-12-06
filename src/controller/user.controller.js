import asynHandler from "../utils/asynHandler.js"
import errorResponse from "../utils/errorResponse.js";
import { requiredValidor } from "../validator/required.validator.js"

const registerHandle = asynHandler(async (req, res) => {
    let avoid = ['coverImage'];
    let error = await requiredValidor(req.body, avoid);
    if (error != null) {
        throw new errorResponse(400, error);
    }
    res.status(200).json({
        message: "fd"
    })
})

const loginHandle = asynHandler(async (req, res) => {
    console.log(req.body);
    res.status(200).json({
        message: "fd"
    })
})



export { registerHandle, loginHandle }