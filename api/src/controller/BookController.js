const BookModel = require('../model/BookModel');

const addBook = async (req, res) => {
    if (req.body) {
        const Book = new BookModel(req.body);
        await Book.save()
            .then((data) => {
                res.status(200).send({ data: data });
            }).catch((error) => {
                res.status(500).send({ error: error.message });
            })
    }
}

const getBooks = async (req, res) => {
    await BookModel.find({})
        .populate('bookAuthor', 'firstName lastName nationality')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        })
}

const getBookById = async (req, res) => {
    if (req.params && req.params.id) {
        await BookModel.findById(req.params.id)
            .populate('bookAuthor', 'firstName lastName nationality')
            .then(response => {
                res.status(200).send({ bookAuthor: response.bookAuthor });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

const calculatePrice = async (req, res) => {
    let totalAmount = 0;
    books =[];
    
    if(req.body){
        books = req.body.bookIds; 
        if(books.length > 0){
            books.map((book) => {
                BookModel.findById(book)
                totalAmount += book.bookPrice;
            })
        }
    }
    res.status(200).send({ totalAmount: totalAmount});
}

module.exports = {
    addBook,
    getBooks,
    getBookById,
    calculatePrice
}