const express = require('express');
const router = require('./routes');

require('dotenv').config({path: 'variables.env'});
const app = express();


//routing
app.use('/', router())

app.listen(process.env.PORT, () => {
    console.log('Esta Vivo!!!!');
})