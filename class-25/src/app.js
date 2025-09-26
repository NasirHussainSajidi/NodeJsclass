const express = require('express')
const {connectDB} = require('./config/database')
const {User} = require('./model/user')
require('dotenv').config()
const app = express()
app.use(express.json())

console.log("panaversity")
console.log("PORT print karo", process.env.PORT)
// app.use('/addData', async(req, res)=>{
//     res.send("data added successfully ")
// })

connectDB().then(()=>{
    console.log("data base connect")
    const port = process.env.PORT || 3000
    app.listen(port, ()=>{
        console.log(`server is runnign on port ${port}`)
    })
}).catch((error)=>{
    console.log("error", error)
    
})