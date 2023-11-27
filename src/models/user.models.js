import mongoose, { Schema } from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt"
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    fullname: {
        type: String,
        required: true,
        index: true
    },
    avatar: {
        type: String,
        require: true
    },
    coverImage: {
        type: String,
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'Password is required']
    },
    refreshToken: {
        type: String,
    },
    watchHistory: [{
        type: Schema.Types.ObjectId,
        ref: "Video"
    }]

},{timestamps:true})

export const User = mongoose.model("User", UserSchema)