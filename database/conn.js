
const {Sequelize} = require('sequelize');

// altere dados abaixo para acessar o seu banco de dados
const nomeBD ='mdbtest';
const nomeUser = 'root';
const pwdBD = '303533';
const tipoBD = 'mariadb';
const numPort = 3307;

const sequelize = new Sequelize(nomeBD, nomeUser, pwdBD, {
    host: 'localhost',
    port: numPort,
    dialect: tipoBD,
    define: {
        freezeTableName: true
    }
});

try {
    sequelize.authenticate();

    console.log('Connection successfully')
}
catch (error) {
    console.log('Connection error')
}

module.exports = sequelize;