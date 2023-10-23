const Post = require('../models/Post');

exports.formNuevoPost = (req, res) => {
    res.render('nuevo-post',{
        nombrePagina:"Crear Post"
    })
        
}

//almacenamiento de los post en la BD

exports.createPost = async (req, res) =>{
    const post = req.body;

    try {
        await Post.create(post);
        req.flash('Exito', 'Se Creo Correctamente el Post');
        res.redirect('/administracion')
        
    } catch (error) {
        console.log(error);
        req.flash('error', error);
        res.redirect('/nuevo-post');
    }
}