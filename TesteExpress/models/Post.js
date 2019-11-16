const db = require('./db');

const Post = db.sequelize.define('postagens', {

    titulo: {

        type: db.Sequelize.STRING
    },
    conteudo: {

        type: db.Sequelize.TEXT
    }
})

module.exports = Post;

// Sempre que eu criar uma tabela tem que comentar o sync porque se não vai ficar criando varias vezes
//Post.sync({ force: true })