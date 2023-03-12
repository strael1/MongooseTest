const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const usuarios = require('./Usuarios');
const path = require('path');

app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// mongoose.connect("mongodb://127.0.0.1:27017/bashboard").then((response) => {
mongoose.connect("mongodb+srv://rafaelsilva2:bmabjJFMFOuRgNcD@treinamento.usistsp.mongodb.net/?retryWrites=true&w=majority").then((response) => {
    console.log('conectado!')
});

// app.get('/usuarios', async (req,res,next) => {
    // Atualiza um registro
    // O primeiro parametro está filtrando, o segundo está atualizando de fato o campo.
    // await usuarios.updateOne({nome: "Anderson"}, {nome: "Anderson Ferreira"});

    // Com promise, você consegue trazer todos os registros 
    // LIST ALL
    // const users = await usuarios.find({});

    // Cria um usuário
    // usuarios.create({
    //     nome: 'Joana',
    //     email: 'joana@hotmail.com',
    //     telefone: '11889933443',
    //     senha: '123iouhowiuer'
    // })

    // Deleta por um filtro
    // usuarios.deleteOne({nome: "Joana"}).then(() => console.log('deletado...'))

//     res.send('Deu certo');
// })


app.get('/usuarios', (req,res,next) => {
    res.render('forms');
})

app.post('/usuarios', async (req,res,next) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const telefone = req.body.telefone;
    const senha = req.body.senha;

    await usuarios.create({
        nome,
        email,
        telefone,
        senha
    }).then((response) => {
        res.redirect('/');
    }).catch(error => {
        res.redirect('/error')
    })
})

app.get('/', async (req,res,next) => {
    const users = await usuarios.find({});
    res.render('list', { users: users })
})

// Exclui um elemento pelo ID
app.get('/contato/:id', async (req,res,next) => {
    const id = req.params.id;
    if(id){
        await usuarios.deleteOne({_id: id}).then(response => {
            res.redirect('/');
        })
    }
})


app.listen(PORT, () => {
    console.log('Servidor executando na port:3000');
})

