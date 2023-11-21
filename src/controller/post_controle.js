const Post = require('../model/post');

function postar(req,res) {

    let post ={
        id_user: req.session.usuario.id,
        conteudo: req.body.texto,
    }

    Post.create(post).then(()=>{
        res.redirect('/conta');
    }).catch((err)=>{
        console.log(err);
        res.render("index.html");
    });
}


module.exports = {
    postar
}