const axios = require('axios');
const cache = require('../utils/cache');

async function buscarCep(req, res) {
  const { cep } = req.body;

  const cepEmCache = cache.buscardaCache(cep);

  if (cepEmCache) {
    return res.status(200).json({ mensagem: 'CEP vindo do cache', dados: cepEmCache.dados });
  }

  try {
    const resposta = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (resposta.data.erro) return res.status(400).json({ erro: 'CEP não encontrado.' });

    cache.salvaremCache(resposta.data);

    return res.status(200).json({ mensagem: 'CEP vindo da API', dados: resposta.data });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao buscar o CEP. Tente novamente.' });
  }
}

function listarEnderecos(req, res) {
  res.status(200).json(cache.listartodos());
}

module.exports = { buscarCep, listarEnderecos }