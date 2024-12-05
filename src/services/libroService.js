const Libro = require('../models/libro');

class libroService {

  // Operaciones para leer e insertar 
  async createLibro(data) {
    const libro = new Libro(data);
    await libro.save();
    return libro;
  }

  async getLibros() {
    return await Libro.find();
  }

  async getLibroById(id) {
    return await Libro.findById(id);
  }

}


module.exports = new libroService();