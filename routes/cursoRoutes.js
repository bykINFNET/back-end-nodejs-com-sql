const express = require('express');

const router = express.Router();

const cursoController = require('../controllers/cursoController');

router.get('/', cursoController.getCursos);
router.post('/', cursoController.addCurso);

module.exports = router;