const express = require("express")
const router = express.Router();
const users = require('../userslist/Users')
//const bodyParser = require('body-parser')
//const { Router } = require("express");

router.get('/api/users', (req, res) =>{
    res.json(users);
});

router.get('/api/users/:id', (req, res)=>{
    const found = users.some(users => users.id === parseInt(req.params.id));
    if(found){res.json(users.filter(users => users.id === parseInt(req.params.id)));
    }else{
        res.status(404).send("user not found");
    }
    
});

router.post('/api/users', (req, res)=>{
    //res.send(req.body);
    const newUser ={
        id : req.body.id,
        name : req.body.name,
        course: req.body.name
    }
    if(!newUser.name || !newUser.course){
        return res.status(404).send("Please provide name & Email")
    }

    users.push(newUser);
})

router.get('/', (req, res)=>{
    res.send("hello");
})
//router.get('/s', (req, res)=>{
//    res.sendFile(path.join(__dirname, 'public/index.html'))
//})

module.exports = router