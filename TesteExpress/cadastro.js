// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('sistema', 'root', '4523', {

//     host: "localhost",
//     dialect: 'mysql'

// })

// const Postagem = sequelize.define('postagens', {

//     titulo: {

//         type: Sequelize.STRING

//     },
//     conteudo: {

//         type: Sequelize.TEXT

//     }

// })

// // Postagem.create({
// //     titulo: "Um titulo hehe",
// //     conteudo: "conteudo de postagem"
// // })


// const Usuario = sequelize.define('usuarios', {

//     nome_user: {

//         type: Sequelize.STRING

//     },
//     idade: {

//         type: Sequelize.INTEGER
//     }




// })

// // Usuario.create({

// //     nome_user: "Vinicius",
// //     idade: "19"

// // })



// // Usuario.sync({ force: true });

// // sequelize.authenticate().then(function () {
// //     console.log("Conectado com sucesso!")
// // }).catch(function (erro) {

// //     console.log("Falha ao conectar: " + erro)
// // })