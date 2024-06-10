const express = require('express')
const userController = require('./../controllers/users')
const isAdminRequireMiddleware = require("../MiddleWares/isAdmin");

const userRouter = express.Router()

userRouter.route("/")
    .get(isAdminRequireMiddleware, userController.getAll)
    .post(isAdminRequireMiddleware, userController.register)

userRouter.route("/:userId")
    .delete(isAdminRequireMiddleware,userController.removeUser)
    .get(isAdminRequireMiddleware,userController.getOne)

module.exports = userRouter