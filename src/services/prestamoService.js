const Prestamo = require('../models/prestamo');

class prestamoService {

  // Operaciones para leer e insertar 
  async createPrestamo(data) {
    const prestamo = new Prestamo(data);
    await prestamo.save();
    return prestamo;
  }

  async getPrestamos() {
    return await Prestamo.find()
                          .populate('libro')  
                          .populate('usuario'); 
  }

  async getPrestamoById(id) {
    return await Prestamo.findById(id);
  }

}

module.exports = new prestamoService();