const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Listado de usuarios
router.get('/', usuarioController.getUsuarios);

// Eliminar usuario desde el listado
router.delete('/:id', usuarioController.deleteUsuario);

// Form de nuevo usuario
router.get('/agregarUsuario',usuarioController.agregarUsuario)

// Solicitud de form de nuevo usuario
router.post('/agregarUsuario',usuarioController.createUsuario)

// Form de editar usuario
router.get('/editarUsuario/:id', usuarioController.editarUsuario);

// Solicitud de editar usuario
router.put('/editarUsuario/:id', usuarioController.updateUsuario);

module.exports = router;