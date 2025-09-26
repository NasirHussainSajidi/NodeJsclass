const mongoose = require('mongoose')

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.wiayn1k.mongodb.net/${process.env.DB_COLLECTION}`

async function connectDB(){
    await mongoose.connect(uri)
}

module.exports = {
    connectDB
}