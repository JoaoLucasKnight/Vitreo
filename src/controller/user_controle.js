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
    res.redirect("/home");
}).catch((err)=>{
    console.log(err);
    let erro = true;
    res.render("cadastro.html", {erro});
});


  };

  async function update_user (req,res) {

    let update = {
      novo_email: req.body.email,
      nova_senha:  req.body.senha,
      novo_telefone: req.body.telefone
    }
    console.log(update)

    try {
      const user = await User.findByPk(req.session.usuario.id);

      if(user){
        user.email = update.novo_email;
        user.senha = update.nova_senha;
        user.telefone = update.novo_telefone;
        
        await user.save();

        res.redirect('/config')
      }

    }catch (erro) {
      console.error('Erro ao atualizar usuário:', erro);
      res.redirect('/index');

    }
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
    const user = req.session.usuario
    res.render('config.html', {user})
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
    verificar,
    update_user
};