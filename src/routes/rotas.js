const express = require('express');

const rota = express.Router();
const controle = require('../controller/constrole');

rota.get('/', controle.index );

module.exports = rota;