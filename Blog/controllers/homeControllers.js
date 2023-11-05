const Post = require('../models/Post');

exports.home = (req, res) => {

    const arreglo = [];
    arreglo.push( Post.findAll({}));
    res.render('home', {
        nombrePagina : 'Menu Principal'
    })
};
