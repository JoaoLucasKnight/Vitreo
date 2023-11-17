const User = require('../model/user')

function index(req,res){
    //const user1 = dados.user[0]
    res.render('index.html');
};

function login(req, res){
    const { username, password } = req.body; // Supondo que você está enviando essas informações no corpo da solicitação POST
  
    // Encontre o usuário com base no email (username)
    const user = dados.user.find((user) => user.username === username);
  
    if (!user) {
      // Usuário não encontrado
      //res.status(401).json({ message: 'Usuário não encontrado' });
      res.render('index.html');
      return ;
    }
  
    if (user.password !== password) {
      // Senha incorreta
      //res.status(401).json({ message: 'Senha incorreta' });
      res.render('index.html');
      return ;
    }
  
    // Autenticação bem-sucedida
    //res.status(200).json({ message: 'Login bem-sucedido', user });
    return res.render('homePage.html');
  };

  function cadastro(req,res){
    res.render('cadastro.html')
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
    cadastrar
};