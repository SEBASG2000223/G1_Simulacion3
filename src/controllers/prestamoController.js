const prestamoService = require('../services/prestamoService');
const Libro = require('../models/libro'); 
const Usuario = require('../models/usuario'); 

class prestamoController {

  //// Renderizar vista: listado de prestamos ////
  async getPrestamos(req, res) {
    try {
      const prestamos = await prestamoService.getPrestamos();
      res.render('prestamos/prestamos', { prestamos });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Renderizar vista: form para agregar prestamos ////
  async agregarPrestamo(req, res) {
    try {
      const libros = await Libro.find();  
      const usuarios = await Usuario.find();  
      res.render('prestamos/agregarPrestamo', { libros, usuarios });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Ejecutar función: agregar prestamos ////
  async createPrestamo(req, res) {
    try {
      const { libro, usuario, fechaPrestamo, fechaDevolucion, estado } = req.body;
      const nuevoPrestamo = await prestamoService.createPrestamo({libro, usuario, fechaPrestamo, fechaDevolucion, estado});
      res.redirect('/prestamos');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new prestamoController();
