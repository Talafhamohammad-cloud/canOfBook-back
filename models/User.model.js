const mongoose = require('mongoose');
const bookSchema = require('./Books.model');

const userSchema = new mongoose.Schema({
    email: {
        type: String
    },
    books: [bookSchema]
});


const userModel = new mongoose.model('User', userSchema);

const seedUserModel = () => {

    const newUser = new userModel({
        email: 'josephtelfah@icloud.com.',
        books: [{
                name: 'The Alchemist',
                description: 'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.',
                status: 'A1',
            },
            {
                name: 'Immortality',
                description: 'Immortality is a novel in seven parts, written by Milan Kundera in 1988 in Czech. First published 1990 in French. English edition 345 p., translation by Peter Kussi. This novel springs from a casual gesture of a woman, seemingly to her swimming instructor.',
                status: 'A2',
            },
            {
                name: 'Angels and Demons',
                description: 'Angels & Demons is a 2000 bestselling mystery-thriller novel written by American author Dan Brown and published by Pocket Books and then by Corgi Books. The novel introduces the character Robert Langdon, who recurs as the protagonist of Browns subsequent novels. ',
                status: 'A3',
            }
        ]
    });
    newUser.save();
    console.log(newUser);
};

module.exports = {
    seedUserModel,
    userModel
};