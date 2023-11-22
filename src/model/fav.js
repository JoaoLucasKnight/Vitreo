const Sequelize = require('sequelize');
const data = require('../dados');


const Fav = data.define('fav', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,

    },
    id_user: {
        type: Sequelize.STRING(2),
        allowNull: false,
    },
    id_fav: {
        type: Sequelize.STRING(2),
        allowNull: false,
    },
});

module.exports = Fav;