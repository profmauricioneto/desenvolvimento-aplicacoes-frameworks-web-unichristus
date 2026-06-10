const express = require('express');
const router = express.Router();
const produtoController = require('./produto.controller.js');

router.get('/produtos', produtoController.mostrarProdutosController);
router.get('/produtos/:id', produtoController.buscarProdutoPorIdController);
router.post('/produtos', produtoController.adicionarProdutoController);
router.delete('/produtos/:id', produtoController.deletarProdutoController);
router.put('/produtos/:id', produtoController.atualizarProdutoController);

module.exports = router;