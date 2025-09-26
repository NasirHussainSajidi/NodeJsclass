const express = require('express')
const {connectDB}= require('./config/database')
const {User} = require('./model/user')

const app = express()
app.use(express.json())

app.use('/dataAdd', async(req, res)=>{
    const {firstName, lastName, password, email}= req.body
    try {
        const user = {
            firstName,
            lastName,
            password,
            email

        }
        const result = await user.save({firstName, lastName, password, email})
        console.log("result is : ", result)
        res.send("data added sucess", result)
    } catch (error) {
        console.log("data is not added in data base", error)
        res.send("data is not added :", error)
    }
})

connectDB().then(()=>{
    console.log("Data Base connect sucessfully")
    app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
}).catch(()=>{
    console.log("Data Base not connect sucessfully")
})
