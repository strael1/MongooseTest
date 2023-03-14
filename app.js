const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;
const path = require('path');
const usuarioRouter = require('./routes/usuarios.routes');

// MIDDLEWARES
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

// CONNECTION
mongoose.connect("mongodb+srv://rafaelsilva2:bmabjJFMFOuRgNcD@treinamento.usistsp.mongodb.net/?retryWrites=true&w=majority")
.then((response) => {
    console.log('conectado!')
});

// ROUTES
app.use(usuarioRouter);

// LISTEN 
app.listen(PORT, () => {
    console.log('Servidor executando na port:', PORT);
})