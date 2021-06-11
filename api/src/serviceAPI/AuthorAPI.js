const express = require('express');
const router = express.Router();

const AuthorController = require('../controller/AuthorController');

module.exports = function () {
    router.post('/addAuthor', AuthorController.addAuthor);
    router.get('/getAuthors', AuthorController.getAuthors);
    return router;
}