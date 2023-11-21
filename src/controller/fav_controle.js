const Fav = require('../model/fav');

function favoritar(req, res) {

    let fav = {
        id_user: req.session.usuario.id,
        id_fav: req.body.favorito
    }

    Fav.create(fav).then(()=>{
        res.redirect('/favorito');
    }).catch((err)=>{
        console.log(err);
        res.render("index.html");
    });

};

module.exports = favoritar;