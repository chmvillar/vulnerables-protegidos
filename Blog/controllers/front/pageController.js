const Publicaciones = require('../../models/Publicaciones');
const Post = require('../../models/Post');
const Usuario = require('../../models/Usuarios');

exports.verpublicacion = async(req, res, next) => {
    const publicaciones = await Publicaciones.findOne({ where : {slug : req.params.slug },
    include : [
        {
            model: Post 
        },
        {
            model: Usuario,
            attributes: ['id','nombre']
        }
    ]  });

    if(!publicaciones){
        res.redirect('/');
    }
    res.render('ver-publicacion', {
        nombrePagina : publicaciones.titulo,
        publicaciones

    })
}