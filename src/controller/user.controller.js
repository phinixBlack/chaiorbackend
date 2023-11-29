import asynHandler from "../utils/asynHandler.js"

const registerHandle = asynHandler(async (req, res) => {
    res.status(200).json({
        message: "ok"
    })
})

export { registerHandle }