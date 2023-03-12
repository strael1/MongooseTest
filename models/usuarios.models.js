const mongoose = require('mongoose');

// Model table collection
const Usuarios = mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    telefone: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Usuarios', Usuarios);

