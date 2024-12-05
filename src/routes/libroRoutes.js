const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

// Listado de libros
router.get('/', libroController.getLibros);

// Form de nuevo libro
router.get('/agregarLibro',libroController.agregarLibro)

// Solicitud de form de nuevo libro
router.post('/agregarLibro',libroController.createLibro)

module.exports = router;