const jwt = require('jsonwebtoken');
const { TOKEN_SECRETO } = require('../config/config');

function autenticarToken(req, res, next) {
    const autirizacao = req.headers['authorization'];
    let token;
    if (autirizacao) {
        token = autirizacao.split(' ')[1];
    } else {
        return res.status(401).json({ erro: 'Token não fornecido' });
    }
    jwt.verify(token, TOKEN_SECRETO, (err, decoded) => {
        if (err) {
            return res.status(401).json({ erro: 'Token inválido ou expirado' });
        }
        req.user = decoded;
        next();
    });
}

module.exports = autenticarToken;