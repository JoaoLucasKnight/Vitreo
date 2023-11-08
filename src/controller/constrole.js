const dados = require('../data.json');

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
  

module.exports ={
    index,
    login
};