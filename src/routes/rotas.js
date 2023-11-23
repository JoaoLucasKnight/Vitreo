const express = require('express');
const controle_user = require('../controller/user_controle');
const controle_post = require('../controller/post_controle');
const controle_fav = require('../controller/fav_controle')
const rota = express.Router();
 

//rota.post('/favoritar', controle_user.verificar, controle_fav.favoritar);
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
rota.get('/perfil', controle_user.verificar, controle_user.perfil )
rota.get('/deletepost', controle_user.verificar, controle_user.deletepost)
rota.get('/sair', controle_user.sair)

rota.post('/atualizar_user', controle_user.verificar, controle_user.update_user)


//posts
rota.post('/postar', controle_user.verificar, controle_post.postar );
rota.get('/cadastro', controle_user.cadastro);

//favotitos 


module.exports = rota;