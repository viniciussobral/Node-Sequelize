// constante do sequelize
const Sequelize = require('sequelize');

// conexão com o banco de dados myslq
const sequelize = new Sequelize('POSTAPP', 'root', '4523', {

    host: "localhost",
    dialect: 'mysql'

})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}