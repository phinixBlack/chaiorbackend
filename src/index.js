import connectDB from "./db/index.js";
//require('dotenv'),config({path: './env'}) this work but change the structure 
import dotenvSecond from "dotenv";

dotenvSecond.config({
    path: './.env'
})

connectDB()