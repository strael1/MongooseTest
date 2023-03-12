const Usuarios = require('../models/usuarios.models');

// get All 
exports.getAll = async (req,res,next) => {
    const users = await Usuarios.find({});
    res.render('home', {users})
}

// Render register Page 
exports.getRegister = (req,res,next) => {
    res.render('forms');
}

// Post users
exports.postUser = (req,res,next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const senha = req.body.senha;

    Usuarios.create({
        nome,
        email,
        telefone,
        senha
    })
    .then(response => {
        res.redirect('/')
    })
    .catch(err => {
        console.error(err);
    })
}

exports.deleteOne = async (req,res,next) => {
    const id = req.params.id;
    if(id){
        await Usuarios.deleteOne({_id: id})
            .then(response => {
                res.redirect('/')
            })
            .catch(err => {
                console.error(err);
            })
    }
}

