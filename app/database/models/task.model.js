import { model, Schema } from "mongoose";

const taskSchema = new Schema({
    type: {
        type: String,
        enum: ['text', 'list'],
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },
    content: {
        type: String,
        required: true
    },
    visibility: {
        type: String,
        enum: ['private', 'public'],
        required: true,
        default: 'private'
    }
})

export const taskModel = model("Task", taskSchema) 