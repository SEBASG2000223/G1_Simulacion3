const libroService = require('../services/libroService');

class libroController {

  //// Renderizar vista: listado de libros ////
  async getLibros(req, res) {
    try {
      const libros = await libroService.getLibros();
      res.render('libros/libros', { libros });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Renderizar vista: form para agregar libros ////
  async agregarLibro(req, res) {
    try {
      res.render('libros/agregarLibro');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Ejecutar función: agregar libros ////
  async createLibro(req, res) {
    try {
      const { titulo, autor, genero, descripcion } = req.body;
      const nuevoLibro = await libroService.createLibro({ titulo, autor, genero, descripcion });
      res.redirect('/libros');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

}

module.exports = new libroController();