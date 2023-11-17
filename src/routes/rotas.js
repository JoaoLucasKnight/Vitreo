const express = require('express');

const rota = express.Router();
const controle = require('../controller/user_controle');

rota.get('/', controle.index );
rota.post('/login', controle.login );
rota.get('/cadastro', controle.cadastro);
rota.post('/cadastrar', controle.cadastrar);
rota.get('/home', controle.home)

module.exports = rota;