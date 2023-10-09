//const mongoose = require('mongoose')
//require('./config/db');

const express = require('express');
const path = require('path');
const router = require('./routes');
const expressEjsLayouts = require('express-ejs-layouts');


const db = require('./config/db')
db.sync().then(() => console.log('Conexion Existosa a la DB')).catch((error) => console.log(error));
require('dotenv').config({path: 'variables.env'});
const app = express();

//Se Habilita el EJS como template engine
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//ubicacion de las vistas
app.set('views', path.join(__dirname, './views'));

//Archivos Staticos
app.use(express.static('public'));

//middleware (voluntario con cuenta iniciada, fecha etc)
app.unsubscribe((req, res, next) =>{
    const fecha = new Date()
    res.localsyear = fecha.getFullYear();
    next();
});
//routing
app.use('/', router())


app.listen(process.env.PORT, () => {
    console.log('Esta Vivo!!!!');
})