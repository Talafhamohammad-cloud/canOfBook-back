const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());

const axios = require('axios');
const mongoose = require('mongoose');
const {
    getBooks,
    createBook,
    updateBook,
    deleteBook
} = require('./controller/Books.controller');
const PORT = process.env.PORT;

const {
    seedUserModel
} = require('./models/User.model');
seedUserModel();
mongoose.connect('mongodb://localhost:27017/FavoriteBooks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


app.get('/',
    function (req, res) {
        res.send('Hello ')
    })


app.get('/books', getBooks)


app.post('/books', createBook)

app.put('/books/:book_idx', updateBook)

app.delete('/books/:book_idx', deleteBook)

app.listen(PORT, () => {
    console.log(`server start on port: ${PORT}`);
});
