const express = require('express');
const router = express.Router();
const produtoController = require('./produto.controller.js');

router.get('/produtos', produtoController.mostrarProdutosController);
router.get('/produtos/:id', produtoController.buscarProdutoPorIdController);
router.post('/produtos', produtoController.adicionarProdutoController);

module.exports = router;