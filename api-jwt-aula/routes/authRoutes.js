const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const verificarToken = require('../middlewares/authMiddleware');

router.post('/register', authController.register);
router.post('/login', authController.login);

// Rota protegida
router.get('/perfil', verificarToken, authController.perfil);

module.exports = router;
