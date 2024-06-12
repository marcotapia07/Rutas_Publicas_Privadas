const express = require('express');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');
const publicRoutes = require('./routers/public_routes.js');
const privateRoutes = require('./routers/private_routes.js');
const authMiddleware = require('./middlewares/auth.js');
const auth = require('basic-auth');
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(fileUpload());

// Rutas públicas
app.use('/public', publicRoutes);

// Rutas privadas
app.use('/private', authMiddleware, privateRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
