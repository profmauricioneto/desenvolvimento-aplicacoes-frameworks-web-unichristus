const dataProdutos = require('../../data/produtos.data')

let idProduto = 5;

function mostrarTodosProdutos() {
    return dataProdutos;
}

function buscarProdutoPorId(id) {
    const produto = dataProdutos.find((p) => p.id === id);
    if (!produto) {
        console.error(`Produto ${id} não encontrado.`);
        return;
    }
    return produto;
}

function adicionarProduto({nome, preco, descricao})    {
    if (!nome || !preco || !descricao) {
        console.error(`Campos obrigatórios vazio(s)`);
        return;
    }
    const produtoNovo = {id: ++idProduto, nome, preco, descricao};
    dataProdutos.push(produtoNovo);
    return produtoNovo;
}

module.exports = {
    adicionarProduto,
    buscarProdutoPorId,
    mostrarTodosProdutos,
}