const passport = require('passport');
// ...
exports.autenticarUsuario = passport.authenticate('local', {
  successRedirect: '/administracion',
  failureRedirect: '/iniciar-sesion',
});
