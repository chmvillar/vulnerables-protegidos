const express = require('express');
const router = express.Router();


module.exports = function(){
    router.get('/', (req, res) => {
        res.render('home')
    });

    router.get('/iniciar-sesion', (req, res) => {
        res.render('iniciar-sesion')
    });
    router.get('/foro', (req, res) => {
        res.render('foro')
    });

    return router;
}