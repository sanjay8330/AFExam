const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        trim: true
    },
    ISBN: {
        type: Number,
        required: true,
        trim: true
    },
    bookAuthor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    },
    bookPrice: {
        type: Number,
        required: true,
        trim: true
    },
    bookYOP: {
        type: Number,
        required: true,
        trim: true
    },
    bookPublisher: {
        type: String,
        required: true,
        trim: true
    }
})

const BookModel = mongoose.model("Books", BookSchema);
module.exports = BookModel;