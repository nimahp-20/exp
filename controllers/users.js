
const { isValidObjectId } = require('mongoose')
const registerValidator = require('../validators/register')
const userModel = require('../models/users')

exports.register = async (req, res) => {
    const validationResult = registerValidator(req.body)

    if (validationResult !== true) {
        return res.status(422).json(validationResult)
    }

    let { name, userName, password, email } = req.body

    const data = await userModel.create({
        name,
        email,
        userName,
        password
    })

    res.status(201).json({
        message: "user Created SuccessFully",
        data
    })

}

exports.getAll = async (req, res) => {
    const users = await userModel.find({}).lean()
    res.json(users)
}

exports.removeUser = async (req, res) => {
    const { userId } = req.params
    if (isValidObjectId(userId)) {
        const deleteUser = await userModel.findByIdAndDelete({ _id: userId })
        if (!deleteUser) {
            return res.status(404).json({
                message: 'User not found'
            })
        } else {
            return res.status(200).json({
                message: 'User Deleted'
            })
        }
    } else {
        return res.status(422).json({
            message: "userId is not valid"
        })
    }
}

exports.getOne = async (req, res) => {
    const { userId } = req.params
    if (isValidObjectId(userId)) {
        const getuser = await userModel.findOne({ _id: userId })
        if (!getuser) {
            return res.status(404).json({
                message: 'User not found'
            })
        } else {
            return res.status(200).json(getuser)
        }
    } else {
        return res.status(422).json({
            message: "userId is not valid"
        })
    }
}