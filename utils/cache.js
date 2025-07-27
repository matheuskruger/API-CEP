const enderecos = [];
const cicominutos = require('../config/config').tempodecache

function buscardaCache(cep) {
  const agora = Date.now();
  return enderecos.find(
    e => e.dados.cep.replace('-', '') === cep && (agora - e.timestamp <cicominutos)
  );
}

function salvaremCache(dados) {
  enderecos.push({ dados, timestamp: Date.now() });
}

function listartodos() {
  return enderecos;
}

module.exports = { buscardaCache, salvaremCache, listartodos };