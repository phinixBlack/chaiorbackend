import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema = new mongoose.Schema({
    videFile: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        type: "User"
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    Views: {
        type: Number,
        default:0
    },
    isPublished: {
        type: Boolean,
        default:true
    },

}, { timestamps: true });
VideoSchema.plugin(mongooseAggregatePaginate);
export const Video = mongoose.Model("Video", VideoSchema)