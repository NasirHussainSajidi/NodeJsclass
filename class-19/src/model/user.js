const mongoose = require('mongoose')

const {Schema } = mongoose

const userSchema = new Schema({
    firstName: {
        type:String,
        min:3,
        max:30,
        require:true
    },
    lastName: {
        type: String,
        min:3,
        max:30
    },
    password: {
        type: String,

    },
    email: {
        type:String,

    },
},
{
    collection: "members",
    timestamps: true
})