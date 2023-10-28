const express = require('express');
const Post = require('../models/Post');


const multer = require('multer');
const shortid = require('shortid');
const configuracionMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, next) =>{
            next(null, __dirname+'/../public/uploads/post/');
        },
        filename: (req, file, next) => {
            const extension = file.mimetype.split('/')[1];
            next(null, `${shortid.generate()}.${extension}`);
        }

    })
}
const upload = multer(configuracionMulter).single('imagen');

exports.subirImagen = (req, res,next) => {
    upload(req, res, function(error) {
        if(error){
            console.log(error);
        } else {
            next();
        }
    })
}
exports.formNuevoPost = (req, res) => {
    res.render('nuevo-post',{
        nombrePagina:"Crear Post"
    })
        
}

//almacenamiento de los post en la BD

exports.createPost = async (req, res) =>{
    const post = req.body;
    post.usuarioId = req.user.id;

    post.imagen = req.file.filename;
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
exports.formEditarPost = async (req, res) => {
    const post = await Post.findByPk(req.params.postId);
    res.render('editar-post', {
        nombrePagina : `Editar Post : ${post.nombrepost}`,
        post

    })
}
exports.editarPost = async (req, res, next) =>{
    const post = await Post.findOne({ where : { id : req.params.postId, usuarioId : req.user.id }});

    if (!post){
        req.flash('error' , 'No valido');
        res.redirect('/administracion');
        return next();
    }
    const { nombrepost , descripcion } = req.body;
    post.nombre = nombrepost;
    post.descripcion = descripcion;

    await post.save();
    req.flash('exito', 'Cambios Realizados') 
    res.redirect('/administracion');

}