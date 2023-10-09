const express = require('express');
const path = require('path');
const router = require('./routes');
const expressEjsLayouts = require('express-ejs-layouts');

require('dotenv').config({path: 'variables.env'});
const app = express();

//Se Habilita el EJS como template engine
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//ubicacion de las vistas
app.set('views', path.join(__dirname, './views'));

//Archivos Staticos
app.use(express.static('public'));

//routing
app.use('/', router())

app.listen(process.env.PORT, () => {
    console.log('Esta Vivo!!!!');
})