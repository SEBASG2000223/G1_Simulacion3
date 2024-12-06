const mongoose = require('mongoose');

const prestamoSchema = new mongoose.Schema({
   
libro: { type: mongoose.Schema.Types.ObjectId, ref: 'libro', required: true },
usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuario', required: true },
fechaPrestamo: { type: Date, required: true },
fechaDevolucion: { type: Date, required: false },
estado: { type: String, required: true },

},

{ collection: 'prestamos' });

module.exports = mongoose.model('prestamo', prestamoSchema);