const express = require('express')
const path = require('path');
const logger = require('./middleware/logger')

const app = express()

const PORT = 4000;

//init middleware
//app.use(logger);
//body perser middleware
app.use(express.json());

app.use('/', require('./routes/routers'));
app.use(express.static(path.join(__dirname, 'public')))



app.listen(PORT, ()=>{
    console.log(`app listening on ${PORT}`);
})
