const Sequelize = require('sequelize');
const data = require('../dados');


const Post = data.define('post', {
    id:{
        type: Sequelize.STRING,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,

    },
    id_user: {
        type: Sequelize.STRING(2),
        allowNull: false,
    },
    conteudo: {
        type: Sequelize.STRING(30),
        allowNull: false,
    },
    forum: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Post;