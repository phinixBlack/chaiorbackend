import connectDB from "./db/index.js";
//require('dotenv'),config({path: './env'}) this work but change the structure 
import dotenvSecond from "dotenv";
import app from "./app.js";

dotenvSecond.config({
    path: './.env'
})

connectDB().then(() => {
    app.on("error", (error) => {
        console.log(`Error"`, error)
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server running in port", ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log("mongoo connnection error", error)
})