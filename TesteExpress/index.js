const express = require("express");
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//config
// template engine
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.get('/', function (req, res) {

    Post.findAll({ order: [['id', 'DESC']] }).then(function (posts) {

        res.render('home', { posts: posts });
        console.log(posts)
    })


})

//Rotas
app.get('/cad', function (req, res) {

    res.render('formulario')


})

app.post('/add', function (req, res) {

    Post.create({

        titulo: req.body.titulo,
        conteudo: req.body.conteudo

    }).then(function () {

        res.redirect('/')
    }).catch(function (erro) {

        res.send("Houve um erro: " + erro)

    })


})

app.get('/deletar/:id', function (req, res) {


    Post.destroy({ where: { 'id': req.params.id } }).then(function () {

        res.send("Postagem deletada com sucesso!")
    }).catch(function (erro) {
        res.send("Está postagen não existe" + erro)
    })
})

app.listen(8081, function () {

    console.log("Porta da aplicação está no http://localhost:8081");

});

