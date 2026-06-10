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

function adicionarProduto(nome, preco, descricao) {
    if (!nome || !preco || !descricao) {
        console.error(`Campos obrigatórios vazio(s)`);
        return;
    }
    const produtoNovo = {id: ++idProduto, nome, preco, descricao};
    dataProdutos.push(produtoNovo);
    return produtoNovo;
}

function deletarProduto(id) {
    const produtoIndex = dataProdutos.findIndex(p => p.id === id);
    if (produtoIndex == -1) {
      console.error(`Error: não existe produto com esse id = ${id}`);
      return;
    } else {
        dataProdutos.slice(produtoIndex, 1);
    }
}

function atualizarProduto(nome, preco, descricao, id) {
    const produtoEncontrado = dataProdutos.find(p => p.id === id);
    if (!produtoEncontrado) {
        console.error(`Error: não existe produto com esse id = ${id}`);
        return;
    } else {
        produtoEncontrado.nome = nome || produtoEncontrado.nome;
        produtoEncontrado.descricao = descricao || produtoEncontrado.descricao;
        produtoEncontrado.preco = preco || produtoEncontrado.preco;
        console.log(`Produto atualizado com sucesso!`);
        
    }
}

module.exports = {
    adicionarProduto,
    buscarProdutoPorId,
    mostrarTodosProdutos,
    atualizarProduto,
    deletarProduto
}