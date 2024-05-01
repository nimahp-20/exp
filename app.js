const express = require('express')
require('./configs/db')
const app = express()
const bookModel = require('./models/books')
const { isValidObjectId } = require('mongoose')
app.use(express.json())
app.use(express.urlencoded())
const usersRouter = require('./routes/users')
app.use('/api/user/', usersRouter)

const courses = [
    {
        id: 1,
        title: 'js',
        price: 2_000
    },
    {
        id: 2,
        title: 'react',
        price: 3_000
    },
    {
        id: 3,
        title: 'node',
        price: 400_000
    }
]
app.get('/courses', (req, res) => {
    if (courses) {
        res.status(200).send({
            success: true,
            data: { courses },
            message: 'datas'
        })
    } else {
        res.status(400).send(res.send({
            success: false,
            data: {},
            message: 'not Found'
        }))
    }
})
app.post('/courses', (req, res) => {
    console.log(req.body);
    res.status(201)
    res.send("Post Created")
})
app.get('/courses/:id', (req, res) => {
    const course = (courses.find(course => course.id === Number(req.params.id)))
    if (course) {
        res.status(200).send({
            success: true,
            data: { course },
            message: 'datas'
        })
    } else {
        res.status(400).send(res.send({
            success: false,
            data: {},
            message: 'not Found'
        }))
    }
})

app.post('/api/book', (req, res) => {
    let { bookName, author, price } = req.body

    if (bookName === "" || author === "" || price === null) {
        res.status(422).json({
            message: "data is not Valid"
        })
    } else {
        bookModel.create({
            price, bookName, author
        })

        res.status(201).json({
            message: "book Created SuccessFully",
        })
    }
})
app.get('/test/:objId', (req, res) => {
    const { objId } = req.params
    res.send(isValidObjectId(objId))
})
app.listen(3050, () => {
    console.log('serverRunning on 3050');
}) 