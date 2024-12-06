const express = require('express');
const router = express.Router();
const prestamoController = require('../controllers/prestamoController');

// Listado de prestamos
router.get('/', prestamoController.getPrestamos);

// Form de nuevo libro
router.get('/agregarPrestamo',prestamoController.agregarPrestamo)

// Solicitud de form de nuevo libro
router.post('/agregarPrestamo',prestamoController.createPrestamo)



module.exports = router;