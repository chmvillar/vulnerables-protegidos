const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeControllers');
const usuariosController = require('../controllers/usuariosControllers')
const forocontroller = require('../controllers/foroControllers')
const registrarcontroller = require('../controllers/registrarControllers')
const authController = require('../controllers/authControllers')
const adminController = require('../controllers/adminControllers')

module.exports = function(){
    router.get('/', homeController.home);
    router.get('/iniciar-sesion', usuariosController.formIniciarSesion);
    router.post('/iniciar-sesion', authController.autenticarUsuario);
    router.get('/foro', forocontroller.foro);
    router.get('/registrar', registrarcontroller.registrar);
    router.post('/registrar', registrarcontroller.registrarCuenta);
    
    router.get('/administracion',
        adminController.panelAdministrador);
    return router;
}