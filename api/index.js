//Import All dependencies 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(bodyparser.json());
app.use(cors());

const PORT = process.env.PORT || 8080;
const MONGODBURL = process.env.MONGODBURL;

mongoose.connect(MONGODBURL || '&w=majority', {
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}, (error) => {
    if(error){
        console.log('Error Occured', error);
    }
});

mongoose.connection.once('open', () => {
    console.log('Database Synced');
});

app.route('/').get(async (req, res) => {
    res.send('Welcome to the Book Library Application');
});

//The Author API
const AuthorAPI = require('./src/serviceAPI/AuthorAPI');

//The Book API
const BookAPI = require('./src/serviceAPI/BookAPI');

app.use('/author', AuthorAPI());
app.use('/book', BookAPI());

app.listen(PORT, () => {
    console.log(`Server started and listening to ${PORT}`);
})

module.exports = app;

