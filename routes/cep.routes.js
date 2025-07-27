const express = require('express');
const router = express.Router();
const { buscarCep, listarEnderecos } = require('../controllers/cep.controller');
const autenticarToken = require('../middlewares/auth.middleware');
const validarCep = require('../middlewares/validateCep.middleware');

router.post('/cep',autenticarToken, validarCep, buscarCep);
router.get('/enderecos', autenticarToken, listarEnderecos);

module.exports = router;