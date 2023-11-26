import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
// read ablut cors in node js 

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())   // this is use to put cookies in the user browser which can only access by browser

export default app