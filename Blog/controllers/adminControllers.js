const Post = require('../models/Post');

exports.panelAdministrador = async (req, res) => {
    const post = await Post.findAll({where: { usuarioId : req.user.id}});
    res.render('administracion', {
        nombrePagina : 'Panel Administrador',
        post
    })
};