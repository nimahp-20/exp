const booksModel = require('../models/books')
const {isValidObjectId} = require("mongoose");
//
// exports.getAll = async (req, res) => {
//
// }


exports.getBook = async (req, res) => {
    if (req.params.id) {
        const {id} = req.params
        let book = null
        if (isValidObjectId(id)) {
            book = await booksModel.findOne({_id: id})
            if (!book) {
                return res.status(404).json({
                    message: "Book not found!"
                })
            } else {
                return res.status(200).json({
                    book
                })
            }
        } else {
            return res.status(400).json({
                message: "invalid Id"
            })
        }
        // const book = await booksModel.getOne()
    } else {
        const books = await booksModel.find({}).lean()
        res.json(books)
    }
}