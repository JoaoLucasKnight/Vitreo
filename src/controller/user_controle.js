const User = require('../model/user.js')
const Post = require('../model/post.js')
const Fav = require('../model/fav.js')

// tive que associar as tabelas que foi nescessario fazer um left join para mostrar todo os user que não são dos nosso favoritos
User.hasMany(Fav, { foreignKey: 'id_user' });
Fav.belongsTo(User, { foreignKey: 'id_user' });

const Sequelize = require('sequelize')

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
        req.session.usuario = {
          id: user.id,
          email: user.email,
          telefone: user.telefone
        };

        res.redirect('/config')
      }

    }catch (erro) {
      console.error('Erro ao atualizar usuário:', erro);
      res.redirect('/index');

    }
  };

  function sair(req, res) {
    req.session.destroy();
    res.redirect('/');
    };

// ROTAS BASICAS 
  function index(req,res){
    req.session.destroy();
    res.render('index.html');
  };

  async function home(req, res) {
    try {
      const id =  req.session.usuario.id 
      const users = await not_fav(id);
      const posts = await getAllPosts();
  
        
        res.render('homePage.html', { posts, users });
     
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro interno do servidor");
    }
  };
  
  async function conta(req,res){

    try {
      const id =  req.session.usuario.id 
      const users = await not_fav(id);
      const posts = await getIdPosts(id);
  
        
        res.render('conta.html', { posts, users });
     
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro interno do servidor");
    }
  };
  
  async function config(req,res){
    try {
      const user = req.session.usuario
      const id =  req.session.usuario.id 
      const users = await not_fav(id);
      res.render('config.html', {user, users });
     
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro interno do servidor");
    }
  };

  function cadastro(req,res){
    res.render('cadastro.html')
  };
  async function add(req,res){

    try {
      const id =  req.session.usuario.id 
      const users = await not_fav(id);
      res.render('add.html', { users });
     
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro interno do servidor");
    }

  };
  function forum(req,res){
    res.render('forum.html')
  };
  async function favorito(req,res){
    try {
      const id =  req.session.usuario.id 
      const users = await not_fav(id);
      res.render('favorito.html', { users });
     
    } catch (error) {
      console.error(error);
      res.status(500).send("Erro interno do servidor");
    }
  };
  
  async function perfil(req,res){
    try{
      const id = req.query.id;
      const posts = await getIdPosts(id)
      
      const logId = req.session.usuario.id
      const users = await not_fav(logId);

      res.render('perfil.html',{id, posts, users})
      }catch (error) {
        console.error(error);
        res.status(500).send("Erro interno do servidor");
      }
  }

  async function deletepost(req, res) {
    try {
      const id_dono = req.session.usuario.id;
      const id = req.query.id;
  
      const rowsDeleted = await Post.destroy({
        where: {
          id_user: id_dono,
          id: id
        }
      });
  
      if (rowsDeleted > 0) {
        console.log('Post deletado com sucesso!');
        res.redirect('/conta');
      } else {
        console.log('Post não encontrado ou usuário não autorizado.');
        res.status(404).send('Post não encontrado ou usuário não autorizado.');
      }
    } catch (error) {
      console.error('Erro ao deletar o post:', error);
      res.status(500).send('Erro ao deletar o post.');
    }
  }
  

  // funções de busca 
  async function not_fav(usuarioLogadoId) {
    try {
      const users = await User.findAll({
        where: {
          id: {
            [Sequelize.Op.not]: usuarioLogadoId,
          },
        },
        include: [{
          model: Fav,
          where: {
            id_user: usuarioLogadoId,
          },
          required: false,
        }],
      });
      return users;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter usuários não favoritos");
    }
  };
  async function getAllPosts() {
    try {
      const posts = await Post.findAll({
        order: [['createdAt', 'DESC']]
      });
      return posts;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter todas as postagens");
    }
  }
  async function getIdPosts(id) {
    try {
      const posts = await Post.findAll({
        where:{
          id_user: id
        },
        order: [['createdAt', 'DESC']]
      });
      return posts;
    } catch (error) {
      console.error(error);
      throw new Error("Erro ao obter todas as postagens");
    }
  }




  

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
    update_user,
    perfil,
    deletepost,
    sair
};