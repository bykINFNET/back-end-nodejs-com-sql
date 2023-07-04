const express = require('express');

const router = express.Router();

const AutenticacaoController = require('../controllers/autenticacaoController');

router.post('/', AutenticacaoController.login);
router.get('/', AutenticacaoController.logout);
router.post('/refreshToken', AutenticacaoController.renovaToken);

module.exports = router;