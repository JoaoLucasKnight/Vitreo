const Fav = require('../model/fav');

async function favoritar(req, res) {
    console.log("entrou no favoritar " + req.body.id);

    try {
        let fav = {
            id_user: req.session.usuario.id,
            id_fav: req.body.id
        };

        await Fav.create(fav);
        res.redirect('/favorito');
    } catch (err) {
        console.error(err);
        res.render("index.html");
    }
};

module.exports = favoritar;

