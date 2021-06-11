const express = require('express');
const router = express.Router();

const BookController = require('../controller/BookController');

module.exports = function () {
    router.post('/addBook', BookController.addBook);
    router.get('/getBooks', BookController.getBooks);
    router.get('/getBookById/:id', BookController.getBookById);
    router.get('/calculateCost', BookController.calculatePrice);
    return router;
}