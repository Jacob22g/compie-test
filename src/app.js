const express = require('express')
const path = require('path')
const { createFakeUsers } = require('./usersFaker');
const mongoose = require('mongoose')
const User = require('../models/user')

const app = express()
const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
const viewsPath = path.join(__dirname, '../public')
const publidDirectoryPath = path.join(__dirname, '../public')
app.set('views', viewsPath)
app.use(express.static(publidDirectoryPath))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// not a real app so password is here and not hidden
const mongodb = 'mongodb+srv://jacob:jacob@cluster0.zx2ye.mongodb.net/fakeUsersDB?retryWrites=true&w=majority'
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to DB')
}).catch((error) => {
    console.log(error)
})

app.get('/', (req, res) => {
    res.render('index',{
        users: 0
    })
})

app.get('/users', (req, res) => {

    // Create and save to DB 1000 fake users
    const users = createFakeUsers()

    // users.forEach((user) => { 
    //     console.log(user);
    //     user.id = user._id;
    //     delete user._id
    // });

    delete users[0]._id;
    console.log(users[0]);

    res.render('index',{
        users
    })
    // User.find().then((result) => {
    //     //console.log('result',result)
    //     res.render('index',{
    //         users: result
    //     }).catch((e) => {
    //         console.log('error:',e);
    //     })
    // })
})

app.get('*', (req, res) => {
    res.send('<h1>404 - Page Not Found</h1>')
})                 

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
