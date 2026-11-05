var express = require('express');
var router = express.Router();
var tentativaController = require('../controllers/tentativaController');

// Rota para registrar tentativa de conhecimento e seus resultados por categoria
router.post('/conhecimento', function (req, res) {
    tentativaController.registrarTentativaConhecimento(req, res);
});

module.exports = router;
