const express = require('express')
const path = require('path')
const app = express()

const PORT = 4000;

app.get('/', (req, res)=>{
    res.send("hello");
})

app.get('/s', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'))
})

app.listen(PORT, ()=>{
    console.log(`app listening on ${PORT}`);
})
