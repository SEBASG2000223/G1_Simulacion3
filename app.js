const express = require('express');
const methodOverride = require('method-override');
const connectDB = require('./src/config/db');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const libroRoutes = require('./src/routes/libroRoutes');
const prestamoRoutes = require('./src/routes/prestamoRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method')); 

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('assets'));

// Rutas: Index
app.get('/', (req, res) => {
    res.render('index'); // Renders src/views/index.ejs
});

// Rutas: Usuarios
app.use('/usuarios', usuarioRoutes);

// Rutas: Libros
app.use('/libros', libroRoutes);

// Rutas: Préstamos
app.use('/prestamos', prestamoRoutes);

// Rutas: Devoluciones
//app.use('/devoluciones', devolucionRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
