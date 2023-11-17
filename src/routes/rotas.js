const express = require('express');

const rota = express.Router();
const controle = require('../controller/constrole');

rota.get('/', controle.index );
rota.post('/login', controle.login );
rota.get('/cadastro', controle.cadastro);
rota.post('/cadastrar', controle.cadastrar);

module.exports = rota;