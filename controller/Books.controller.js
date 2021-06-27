const {
    userModel
} = require('../models/User.model');

const getBooks = (req, res) => {

    const {
        email
    } = req.query;
    userModel.find({
        email: email
    }, (error, user) => {
        if (error) {
            res.send(error);
        } else {
            res.json(user);
        }
    })
}

const createBook = (req, res) => {
    const {
        email,
        name,
        description,
        status
    } = req.body;
    console.log(req.body);
    userModel.findOne({
        email: email
    }, (error, userData) => {
        if (error) {
            res.status(400).send(error);

        } else {

            userData.books.push({
                name: name,
                description: description,
                status: status
            });
            userData.save();
            res.json(userData);
            console.log(userData);
        }
    })
}

const updateBook = (req, res) => {
    const bookIndex = req.params.book_idx;
    const {
        email,
        name,
        description,
        status
    } = req.body;
    userModel.findOne({
        email: email
    }, (error, userData) => {
        if (error) {
            res.send(error);

        } else {

            userData.books.splice(bookIndex, 1, {
                name: name,
                description: description,
                status: status
            });
            userData.save();
            res.send(userData);
            console.log(userData);

        }
    })
    console.log(req.params);

}

const deleteBook = (req, res) => {
    const bookIndex = req.params.book_idx;
    const {
        email
    } = req.query;
    userModel.findOne({
        email: email
    }, (error, userData) => {
        if (error) {
            res.send(error);

        } else {

            userData.books.splice(bookIndex, 1);
            userData.save();
            res.send(userData);
            console.log(userData);

        }
    })
    console.log(req.params);

}
module.exports = {
    getBooks,
    createBook,
    updateBook,
    deleteBook
};