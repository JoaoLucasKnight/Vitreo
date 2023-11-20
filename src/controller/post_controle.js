const Post = require('../model/post');

function postar(req,res) {

    let post ={
        id_user: req.session.usuario,
        conteudo: req.body.texto,
    }

    Post.create(post).then(()=>{
        let sucesso = true;
        res.render("homePage.html", {sucesso});
    }).catch((err)=>{
        console.log(err);
        let erro = true;
        res.render("cadastro.html", {erro});
    });
}


module.exports = {
    postar
}