const produtosModelo = require('./produto.model.js');
// const express = require('express');
// const app = express();

const mostrarProdutosController = (req, res) => {
    console.log(`mostrar produtos`);
    
    try {
        const produtos = produtosModelo.mostrarTodosProdutos();
        res.json({message: 'produtos encontrados!', produtos});
    } catch (error) {
        console.error(`Error ao carregar a base de dados: ${error}`);
        res.json({ message: `Error ao carregar a base de dados` });
    }
}

const buscarProdutoPorIdController = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const produto = produtosModelo.buscarProdutoPorId(id);
        if (!produto) {
            res.json({message: `Produto não encontrado!`})
        }
        res.json({message:'Produto Encontrado!', produto});
    } catch (error) {
        console.error(`Não foi possível encontrar produto ${id}: ${error}`);
        res.json({ message: `Não foi possível encontrar produto ${id}`});
    }
}

const adicionarProdutoController = (req, res) => {
    try {
        const {nome, preco, descricao} = req.body;
        const novoProduto = produtosModelo.adicionarProduto(nome, preco, descricao);
        res.json({message: `Produto adicionado com sucesso!`, produto: novoProduto})
    } catch (error) {
        console.error(`Não possível adicionar o produto, ${error}`);
        res.json({message: `Não possível adicionar o produto`}); 
    }
}

module.exports = {
    adicionarProdutoController,
    mostrarProdutosController,
    buscarProdutoPorIdController,
}
