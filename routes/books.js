const express = require('express')
const bookController = require('./../controllers/books')
const isAdminRequireMiddleware = require('./../MiddleWares/isAdmin')
const bookRouter = express.Router()

bookRouter.use(isAdminRequireMiddleware)

bookRouter.route("/:id?")
    .get(bookController.getBook)

module.exports = bookRouter