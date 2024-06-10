const mongoose = require('mongoose')

const userModel = mongoose.model('books', {
    bookName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 18
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        required: true,
    },
    free: {
        type: Number,
        default: 1,
    }
})

module.exports = userModel