const express = require("express")
const router = express.Router();
const users = require('../userslist/Users')
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
    res.send(req.body);
})

router.get('/', (req, res)=>{
    res.send("hello");
})
//router.get('/s', (req, res)=>{
//    res.sendFile(path.join(__dirname, 'public/index.html'))
//})

module.exports = router