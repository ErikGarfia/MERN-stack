const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function(req, res, next) {
  // Obtencion del token
  const token = req.header('x-auth-token');

  // Verificar si hay token
  if (!token) {
    return res.status(401).json({ msg: 'No token, acceso denegado' });
  }

  // Verificar token
  try {
    await jwt.verify(token, config.get('jwtSecret'), (error, decoded)=>{
      if(error){
        res.status(401).json({ msg: 'Token no valido' });
      }
      else{
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('Algo salio mal')
    res.status(500).json({ msg: 'Server Error' });
  }
};
