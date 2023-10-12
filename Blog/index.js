//const mongoose = require('mongoose')
//require('./config/db');

const express = require('express');
const path = require('path');
const router = require('./routes');
const expressEjsLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('./config/passport');




//configuracion BD 
const db = require('./config/db');


    require('./models/Usuarios');
    db.sync().then(() => console.log('Conexion Existosa a la DB')).catch((error) => console.log(error));



require('dotenv').config({path: 'variables.env'});


const app = express();

//lector de los formularios
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
//Se Habilita el EJS como template engine
app.use(expressEjsLayouts);
app.set('view engine', 'ejs');

//ubicacion de las vistas
app.set('views', path.join(__dirname, './views'));

//Archivos Staticos
app.use(express.static('public'));

//cookie parser

app.use(cookieParser());
app.use(session({
    secret: process.env.SECRETO,
    key: process.env.KEY,
    resave :false,
    saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());
//middleware (voluntario con cuenta iniciada, fecha etc)
app.unsubscribe((req, res, next) =>{
    res.locals.mensajes = req.flash();
    const fecha = new Date()
    res.localsyear = fecha.getFullYear();
    next();
});


//routing
app.use('/', router())


app.listen(process.env.PORT, () => {
    console.log('Esta Vivo!!!!');
})