const mongoose = require('mongoose');

const libroSchema = new mongoose.Schema({
   
  titulo: { type: String, required: true }, 
  autor: { type: String, required: true },
  genero: { type: String, required: true },
  descripcion: { type: String, required: true }
},

{ collection: 'libros' });

module.exports = mongoose.model('libro', libroSchema);