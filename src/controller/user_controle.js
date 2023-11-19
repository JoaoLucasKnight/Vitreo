const User = require('../model/user')


// ROTAS DE MANIPULAÇÃO DE DADOS 
  async function login(req, res){
   
  const usuario = await User.findOne({
    where: {
      email: req.body.email,
      senha: req.body.senha
    }
  });

  if (usuario != null){
      req.session.usuario = usuario
      req.session.autorizado = true
      res.redirect('/home')
  }
  else {
    req.session.autorizado = false
    res.render('index.html')
  }   
  };

  function verificar (req, res, next){
  if(req.session.autorizado){
    next();
    }
  else{
    res.redirect('/');
}   
  };

  function cadastrar(req,res){
  let user = {
    email: req.body.email,
    senha: req.body.password,
    telefone: req.body.Telefone
  }

  User.create(user).then(()=>{
    let sucesso = true;
    res.render("homePage.html", {sucesso});
}).catch((err)=>{
    console.log(err);
    let erro = true;
    res.render("cadastro.html", {erro});
});


  };

// ROTAS BASICAS 
  function index(req,res){
  res.render('index.html');
  };
  function home(req,res){
    const user = req.session.usuario
    res.render('homePage.html', {user})
  };
  function conta(req,res){
    res.render('conta.html')
  };
  function config(req,res){
    res.render('config.html')
  };
  function cadastro(req,res){
    res.render('cadastro.html')
  };
  function add(req,res){
    res.render('add.html')
  };
  function forum(req,res){
    res.render('forum.html')
  };
  function favorito(req,res){
    res.render('favorito.html')
  };


  

module.exports ={
    index,
    login,
    cadastro,
    cadastrar,
    home,
    conta,
    config,
    add, 
    forum,
    favorito,
    verificar
};