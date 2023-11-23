const Post = require('../models/Post');
const Publicaciones = require('../models/Publicaciones');
const moment = require('moment');
exports.panelAdministrador = async (req, res) => {

    const arreglo = [];
    arreglo.push( Post.findAll({where: { usuarioId : req.user.id}}) );
    arreglo.push( Publicaciones.findAll({where: { usuarioId : req.user.id}}));
    
    //array destructuring
    const [post, publicaciones ] = await Promise.all(arreglo);
    
    res.render('administracion', {
        nombrePagina : 'Panel Administrador',
        post,
        publicaciones,
        moment

    })
};
exports.eliminarTodasPublicaciones = async (req, res, next) => {
    try {
       await Publicaciones.destroy({
          where: { usuarioId: req.user.id }
       });
 
       req.flash('pass', 'Se borraron todas las publicaciones');
       res.redirect('/administracion');
    } catch (error) {
       console.error(error);
       req.flash('error', 'Ocurrió un error al intentar borrar todas las publicaciones');
       res.redirect('/administracion');
    }
 };
 