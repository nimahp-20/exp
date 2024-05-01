const mongoose = require('mongoose')

const userModel = mongoose.model('users', {
    name: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 18
    },
    userName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 18
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: true,
        minLength: 8,
        maxLength: 14
    }
})

module.exports = userModel