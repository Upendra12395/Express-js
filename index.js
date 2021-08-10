const express = require('express')
const path = require('path');
const users = require('./userslist/Users')
const logger = require('./middleware/logger')
const moment = require('moment')
const app = express()

const PORT = 4000;

//init middleware
app.use(logger);

app.get('/api/users', (req, res) =>{
    res.json(users);
});

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res)=>{
    res.send("hello");
})

//app.get('/s', (req, res)=>{
//    res.sendFile(path.join(__dirname, 'public/index.html'))
//})

app.listen(PORT, ()=>{
    console.log(`app listening on ${PORT}`);
})
