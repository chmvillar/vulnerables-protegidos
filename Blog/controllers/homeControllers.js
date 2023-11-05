const Publicaciones = require('../models/Publicaciones')
const moment = require('moment');
exports.home = async (req, res) => {

    const arreglo = [];
    arreglo.push( Publicaciones.findAll({}));

    const [ publicaciones ] = await Promise.all(arreglo); 
    res.render('home', {
        nombrePagina : 'Menu Principal',
        publicaciones,
        moment
    })
};
