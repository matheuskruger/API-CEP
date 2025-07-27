const { body, validationResult } = require('express-validator');

const validarCep = [
  body('cep').notEmpty().withMessage('O CEP deve ser informado'),
  body('cep').isNumeric().withMessage('O CEP deve conter apenas números'),
  body('cep').isLength({ min: 8, max: 8 }).withMessage('O CEP deve ter exatamente 8 caracteres'),
  (req, res, next) => {
    const erros = validationResult(req);
    if (!erros.isEmpty()) return res.status(400).json({ erros: erros.array() });
    next();
  }
];

module.exports = validarCep;
