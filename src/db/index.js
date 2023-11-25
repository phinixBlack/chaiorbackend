import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
       
        const ConnectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n mongo connected`)
    } catch (error) {
        console.log("mogo connection faile", error)
        process.exit(1);
    }
}

export default connectDB