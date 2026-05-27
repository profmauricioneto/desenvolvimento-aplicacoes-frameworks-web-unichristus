const express = require('express');
const app = express();
const PORT = 3000;

const produtos = [
  { id: 1, nome: 'celular', preco: 2000, descricao: 'xiaomi' },
  { id: 2, nome: 'carregador', preco: 80, descricao: 'powerbank' },
  { id: 3, nome: 'fone', preco: 130, descricao: 'buds' },
  { id: 4, nome: 'relogio', preco: 1200, descricao: 'smartwatch' },
  { id: 5, nome: 'table', preco: 4000, descricao: 'ipad' },
];

let idExtra = 5;

// middleware de log
const middlewareLog = (req, res, next) => {
    console.log(`[${new Date().toUTCString()}] - ${req.method} - ${req.url}`);
    next();
}
// aplicando middlewares em todas as rotas
app.use(middlewareLog);
app.use(express.json());

// rota para retornar todos os produtos 
app.get('/produtos', (req, res) => {
    res.json(produtos);
});

// rota para retornar um produto especificado pelo id
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(`valor id = ${id}`);
    let produto = produtos.find(p => p.id === id);
    if (!produto) {
        res.status(404).json({message: `produto cujo id = ${id} não encontrado!`});
    } else {
        res.status(200).json(produto);
    }
});

// rota para inserir um novo produto
app.post('/produtos', (req, res) => {
    const {nome, preco, descricao} = req.body;

    if (!nome || !preco || !descricao) {
        res.json({message: 'campo obrigatório vazio!'});
    }
    const produto = {id: ++idExtra, nome, preco, descricao};
    produtos.push(produto);
    res.status(200).json({message: 'produto inserido com sucesso', produtos})
});

// rota para deletar um produto
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let index = produtos.findIndex(p => p.id === id);
    if (index === -1) {
        res.json({message: `produto cujo id = ${id} não encontrado`});
    } else {
        produtos.splice(index, 1);
        res.status(200).json({message: 'Produto excluído com sucesso!', produtos});
    }
});

app.put('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const {nome, preco, descricao} = req.body;
    let produto = produtos.find(p => p.id === id);
    if (!produto) {
        res.status(404).json({message: `Erro: produto cujo id = ${id} não encontrado!`})
    } else {
        produto.nome = nome || produto.nome;
        produto.preco = preco || produto.preco;
        produto.descricao = descricao || produto.descricao;
        res.status(200).json({message: `produto atualizado com sucesso!`}, produtos)
    }
})

// rota raiz
app.get('/', (req, res) => {
    res.json('API de Produtos!')
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
    
})