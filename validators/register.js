const Validator = require('fastest-validator')

const v = new Validator

const schema = {
    name: {
        type: "string",
        min: 3,
        max: 12
    },
    userName: {
        type: "string",
        min: 4,
        max: 20
    },
    email: {
        type: "string"
    },
    password: {
        type: "string",
        min: 8,
        max: 14
    },
    confirmPassword: {
        type: 'equal',
        field: 'password'
    },
    $$strict: true

}


const check = v.compile(schema)
module.exports = check