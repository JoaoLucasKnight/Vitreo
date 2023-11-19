const express = require('express');

const rota = express.Router();
const controle_user = require('../controller/user_controle');

// user 
rota.get('/', controle_user.index );
rota.post('/login', controle_user.login );
rota.post('/cadastrar', controle_user.cadastrar);
rota.get('/home', controle_user.verificar ,controle_user.home);
rota.get('/conta', controle_user.verificar ,controle_user.conta);
rota.get('/config', controle_user.verificar ,controle_user.config);
rota.get('/add', controle_user.verificar ,controle_user.add);
rota.get('/forum', controle_user.verificar ,controle_user.forum);
rota.get('/favorito', controle_user.verificar ,controle_user.favorito);


rota.get('/cadastro', controle_user.cadastro);

module.exports = rota;