const express = require('express')
const {connectDB} = require('./consfig/database')
const {User} = require('./model/user')
const app = express()

app.use(express.json())

app.use('/getUser', async(req, res)=>{
    try {
        const users = await User.find({})
        console.log(users)
        res.send(users)
    } catch (error) {
        res.status(404).send("error adding users")
    }
})

app.use('/addUser', async (req, res) => {
    const data = req.body;
    try {
        const user = new User(data);
        await user.save();
        res.send({ message: 'User added successfully!', user });
    } catch (error) {
        if (error.code === 11000 && error.keyPattern && error.keyPattern.email) {
            res.status(400).send('Error: Email already exists.');
        } else {
            res.status(500).send('Error adding user: ' + error);
        }
    }
});

app.use('/updateUser/:id', async(req, res)=>{
    try {
        const data = req.body
        const {id} = req.params
        const user = await User.findByIdAndUpdate(id, data, {returnDocument: 'after'})
        console.log("user ", user)
        res.send('data find successfull '+ user)
    } catch (error) {
        res.status(501).send('error updating user')
        
    }
})
app.use('/deleteUser/:id', async(req, res)=>{
    const {id} = req.params
    try {
        await User.findByIdAndDelete(id)
        res.send('User delete successfully ')
    } catch (error) {
        res.status(501).send('Use delete error')
    }

})



app.use('/Data', async(req, res)=>{

    try {
        const user = new User({
            firstName: "Nasir",
            lastName: "Hussain",
            password: 123,
            email: nasir
        })
        const result = await User.save()
        console.log("result", result)
        res.send("data add hogaua ha", result)
    } catch (error) {
        console.log('error araha ah ', error )
        res.status(501).send("error", error)
    }
})



connectDB().then(()=>{
    console.log("database connect successfully")
    app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})
}).catch((error)=>{
    console.log("error ", error)
})