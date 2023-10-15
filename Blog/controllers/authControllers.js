const passport = require('passport');
// ...
exports.autenticarUsuario = passport.authenticate('local', {
  successRedirect: '/administracion',
  failureRedirect: '/iniciar-sesion',
});


//revisa si el usuario esta autenticado

exports.usuarioAutenticado = (req, res, next) => {
    if(req.isAuthenticated() ) {
      return next();
    }

    return res.redirect('/iniciar-sesion');
}