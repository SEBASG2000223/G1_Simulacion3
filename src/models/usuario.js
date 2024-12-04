const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  
  cedula: { type: Number, required: true }, 
  nombre: { type: String, required: true }, 
  correo: { type: String, required: true }
},

{ collection: 'usuarios' });

module.exports = mongoose.model('usuario', usuarioSchema);