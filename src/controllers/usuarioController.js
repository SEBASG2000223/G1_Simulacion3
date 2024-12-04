const usuarioService = require('../services/usuarioService');

class usuarioController {

  //// Renderizar vista: listado de usuarios ////
  async getUsuarios(req, res) {
    try {
      const usuarios = await usuarioService.getUsuarios();
      res.render('usuarios/usuarios', { usuarios });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Ejecutar función: eliminar usuario ////
  async deleteUsuario(req, res) {
    try {
      const { id } = req.params;
      await usuarioService.deleteUsuario(id);
      res.redirect('/usuarios');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: err.message });
    }
  }

  //// Renderizar vista: form para agregar usuario ////
  async agregarUsuario(req, res) {
    try {
      res.render('usuarios/agregarUsuario');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Ejecutar función: agregar usuario ////
  async createUsuario(req, res) {
    try {
      const { cedula, nombre, correo } = req.body;
      const nuevoUsuario = await usuarioService.createUsuario({ cedula, nombre, correo });
      res.redirect('/usuarios');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Renderizar vista: form para agregar usuario ////
  async editarUsuario(req, res) {
    try {
      const { id } = req.params;
      const usuario = await usuarioService.getUsuarioById(id);
      res.render('usuarios/editarUsuario', { usuario });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }

  //// Ejecutar función: editar usuario ////
  async updateUsuario(req, res) {
    try {
      const { id } = req.params;
      const { cedula, nombre, correo } = req.body;
      const usuarioActualizado = await usuarioService.updateUsuario(id, { cedula, nombre, correo });
      res.redirect('/usuarios');
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new usuarioController();