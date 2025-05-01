import mongoose from "mongoose";

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        publishYear: {
            type: String,
            required: false,
        },
    },
    {
        timpestamps: true,
    }
);

export const Book = mongoose.model('Cat', bookSchema);