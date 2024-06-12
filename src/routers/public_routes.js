const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/controller.js');

router.get('/', (req, res) => {
    res.send('Ruta pública');
});

router.post('/register', registerUser);

module.exports = router;
