const express = require('express');

const router = express.Router();

const inscricaoController = require('../controllers/inscricaoController');

router.get('/', inscricaoController.getInscricoes);
router.post('/', inscricaoController.addInscricao);

module.exports = router;