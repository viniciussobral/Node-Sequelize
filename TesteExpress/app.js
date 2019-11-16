// const express = require("express");

// // const ou constante significa que vocÊ não consegue sobreescrever os dados dessa variavel
// const app = express();

// // rotas são caminhos da aplição como na vida real existem rotas para chegar em determinado lugar
// app.get("/", function (req, res) {

//     res.sendFile(__dirname + "/html/index.html");

// });

// app.get("/contato", function (req, res) {

//     res.sendFile(__dirname + "/html/contato.html");
// });

// app.get("/celular", function (req, res) {

//     res.send("Oi eu sou um celular!!");
// });

// app.get("/ola/:cargo/:nome", function (req, res) {

//     // o send só pode ser usado somente um vez!!!!!
//     res.send("<h2>Olá " + req.params.nome + "<h2>" + "<h3>Seu cargo é: " + req.params.cargo + "<h3>"); // coloca a rota do aparametro pegando o nome e o cargo


// });


// // funão para chamar o servidor listen(é a porta do servidor); ela tem que ser a ultima linha do código
// app.listen(8081, function () {

//     console.log("Porta da aplicação está no http://localhost:8081");

// });
// // função de call back  é uma funçao que é executada sempre que um evento acontece
