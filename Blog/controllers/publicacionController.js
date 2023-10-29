const Post = require('../models/Post');

exports.formNuevaPublicacion = async (req, res) => {

    const post = await Post.findAll({where: { usuarioId : req.user.id}});
    
    res.render('nueva-publicacion', {
        nombrePagina : 'Crear Nueva Publicacion',
        post

    })
}