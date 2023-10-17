import mongoose from "mongoose";

const blogSchema = mongoose.Schema(
    
    {
        title: {
            type: String,
            required: true,
        },
        persona: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
    
)

export const Blog = mongoose.model('Blog', blogSchema)