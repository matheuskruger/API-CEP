const jwt = require('jsonwebtoken');
const { USUARIO, SENHA, TOKEN_SECRETO } = require('../config/config');

function login(req, res) {
  const { login, senha } = req.body;

  if (login === USUARIO && senha === SENHA) {
    const token = jwt.sign({ usuario: login }, TOKEN_SECRETO, { expiresIn: '10m' });
    return res.json({ token });
  }

  return res.status(401).json({ erro: 'Usuário ou senha inválidos' });
}

module.exports = { login };
