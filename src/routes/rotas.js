const express = require('express');

const rota = express.Router();
const controle = require('../controller/constrole');

rota.get('/', controle.index );
rota.post('/login', controle.login );

module.exports = rota;