const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const usuarioRouter = require('./routes/usuarios.routes');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect("mongodb+srv://rafaelsilva2:bmabjJFMFOuRgNcD@treinamento.usistsp.mongodb.net/?retryWrites=true&w=majority").then((response) => {
    console.log('conectado!')
});

app.use(usuarioRouter);


// app.get('/usuarios', (req,res,next) => {
//     res.render('forms');
// })

// app.post('/usuarios', async (req,res,next) => {
//     const nome = req.body.nome;
//     const email = req.body.email;
//     const telefone = req.body.telefone;
//     const senha = req.body.senha;

//     await usuarios.create({
//         nome,
//         email,
//         telefone,
//         senha
//     }).then((response) => {
//         res.redirect('/');
//     }).catch(error => {
//         res.redirect('/error')
//     })
// })

// app.get('/', async (req,res,next) => {
//     const users = await usuarios.find({});
//     res.render('list', { users: users })
// })

// // Exclui um elemento pelo ID
// app.get('/contato/:id', async (req,res,next) => {
//     const id = req.params.id;
//     if(id){
//         await usuarios.deleteOne({_id: id}).then(response => {
//             res.redirect('/');
//         })
//     }
// })


app.listen(PORT, () => {
    console.log('Servidor executando na port:3000');
})

