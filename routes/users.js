const express = require('express')
const userController = require('./../controllers/users')

const userRouter = express.Router()

userRouter.route("/")
    .get(userController.getAll)
    .post(userController.register)

userRouter.route("/:userId")
    .delete(userController.removeUser)
    .get(userController.getOne)

module.exports = userRouter