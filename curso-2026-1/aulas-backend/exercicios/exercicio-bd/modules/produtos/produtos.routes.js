const express = require('express');
const router = express.Router();
const ProdutoController = require('./produtos.controller');

router.post('/produtos', ProdutoController.criarProdutoController);
router.get('/produtos', ProdutoController.listarProdutosController);
router.get('/produtos/:id', ProdutoController.buscarProdutoPorIdController);
router.put('/produtos/:id', ProdutoController.atualizarProdutoController);
router.delete('/produtos/:id', ProdutoController.deletarProdutoController);

module.exports = router;
