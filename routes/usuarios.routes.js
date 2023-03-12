const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarios.controller');

router.get('/', usuarioController.getAll);
router.get('/cadastro', usuarioController.getRegister);
router.post('/cadastro', usuarioController.postUser);
router.get('/deleteuser/:id', usuarioController.deleteOne);

module.exports = router;