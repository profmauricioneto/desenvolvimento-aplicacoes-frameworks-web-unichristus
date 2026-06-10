const produtosModelo = require('./produto.model.js');

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
        if (!novoProduto) {
            console.error(`Erro ao adicionar produto a base!`);
        }
        res.json({message: `Produto adicionado com sucesso!`, produto: novoProduto})
    } catch (error) {
        console.error(`Não possível adicionar o produto, ${error}`);
        res.json({message: `Não possível adicionar o produto`}); 
    }
}

const deletarProdutoController = (req, res) => {
    try {
        const id = parseInt(req.params.id);
        produtosModelo.deletarProduto(id);
    } catch (error) {
        console.error(`Não possível deletar o produto, ${error}`);
        res.json({ message: `Não possível deletar o produto` }); 
    }
}

const atualizarProdutoController = (req, res) => {
    try {
        const {nome, preco, descricao} = req.body;
        const id = parseInt(req.params.id);
        produtosModelo.atualizarProduto(nome, preco, descricao, id);
    } catch (error) {
        console.error(`Não possível atualizar o produto, ${error}`);
        res.json({ message: `Não possível atualizar o produto` });   
    }
}

module.exports = {
    adicionarProdutoController,
    mostrarProdutosController,
    buscarProdutoPorIdController,
    atualizarProdutoController,
    deletarProdutoController,
}
