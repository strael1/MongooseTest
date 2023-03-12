const mongoose = require('mongoose');

const UsuariosSchema = mongoose.Schema({
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

module.exports = mongoose.model('Usuarios', UsuariosSchema);

