const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeControllers');
const usuariosController = require('../controllers/usuariosControllers')
const forocontroller = require('../controllers/foroControllers')
module.exports = function(){
    router.get('/', homeController.home);
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);
    router.get('/foro', forocontroller.foro)
    return router;
}