const Sequelize = require('sequelize');
const data = require('../dados');

// Função para gerar um caractere aleatório entre letras maiúsculas, números e símbolos
const randomChar = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?/[]{},.';
    return characters[Math.floor(Math.random() * characters.length)];
  };


const User = data.define('user', {
    id: {
        type: Sequelize.STRING(2),
        primaryKey: true,
        allowNull: false,
        defaultValue: () => randomChar() + randomChar(),
        unique: true,
      },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
    senha: {
        type: Sequelize.STRING,
        allowNull: false
      }, 
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:true
      },

});



module.exports = User;

