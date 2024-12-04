const Usuario = require('../models/usuario');

class usuarioService {

  // Operaciones CRUD
  async createUsuario(data) {
    const usuario = new Usuario(data);
    await usuario.save();
    return usuario;
  }

  async getUsuarios() {
    return await Usuario.find();
  }

  async getUsuarioById(id) {
    return await Usuario.findById(id);
  }

  async updateUsuario(id, data) {
    return await Usuario.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUsuario(id) {
    return await Usuario.findByIdAndDelete(id);
  }
}


module.exports = new usuarioService();