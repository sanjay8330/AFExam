const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    }
})

const AuthorModel = mongoose.model("Author", AuthorSchema);
module.exports = AuthorModel;