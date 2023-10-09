const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeControllers');
const usuariosController = require('../controllers/usuariosControllers')
const forocontroller = require('../controllers/foroControllers')
const registrarcontroller = require('../controllers/registrarControllers')
module.exports = function(){
    router.get('/', homeController.home);
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);
    router.get('/foro', forocontroller.foro)
    router.get('/registrar', registrarcontroller.formregistrar)
    return router;
}