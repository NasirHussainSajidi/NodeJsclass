const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        min:3,
        max:30
    },
    lastName: {
        type: String,
        min: 3,
        max: 15
    },
    password: {
        type: String,
        min:8
    },
    email: {
        type: String
    }

},
{
    collection: "student",
    timestamps: true
}
)

const User = mongoose.model("User", userSchema)

module.exports = {
    User
}