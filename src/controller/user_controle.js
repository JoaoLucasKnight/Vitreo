const User = require('../model/user')

function index(req,res){
    //const user1 = dados.user[0]
    res.render('index.html');
};

async function login(req, res){
   
  const usuario = await User.findOne({
    where: {
      email: req.body.email,
      senha: req.body.senha
    }
  });

  if (usuario != null){
      req.session.usuario = usuario
      res.redirect('/home')
  }
  else {
    res.render('index.html')
  }
  
   
  };

  function home(req,res){
    res.render('homePage.html')
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


  }
  

module.exports ={
    index,
    login,
    cadastro,
    cadastrar,
    home,
    conta,
    config,
    add
};