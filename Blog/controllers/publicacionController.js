const Post = require('../models/Post');
const Publicaciones = require('../models/Publicaciones');

exports.formNuevaPublicacion = async (req, res) => {
  const post = await Post.findAll({ where: { usuarioId: req.user.id } });

  res.render('nueva-publicacion', {
    nombrePagina: 'Crear Nueva Publicación',
    post
  });
};

exports.crearPublicacion = async (req, res) => {
  const publicaciones = req.body;
  publicaciones.usuarioId = req.user.id;

  try {
    await Publicaciones.create(publicaciones);
    req.flash('success', 'Se creó correctamente la publicación');
    res.redirect('/administracion');
  } catch (error) {
    console.log(error);
    req.flash('error', 'Error al crear la publicación');
    res.redirect('/nueva-publicacion');
  }
};
