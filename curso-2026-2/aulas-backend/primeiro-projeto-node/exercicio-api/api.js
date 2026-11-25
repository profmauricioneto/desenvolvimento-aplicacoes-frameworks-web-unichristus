require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const produtos = [
  { id: 1, nome: 'bombom', preco: 1.99, descricao: 'bala bigbig' },
  { id: 2, nome: 'xilito', preco: 5.99, descricao: 'xilito de cebola' },
  { id: 3, nome: 'toddynho', preco: 10, descricao: 'toddynho de chocolate' },
  { id: 4, nome: 'rapadura', preco: 5, descricao: 'é doce mais não é mole' },
  { id: 5, nome: 'refrigerante', preco: 1.99, descricao: 'pitchulinha' },
  { id: 6, nome: 'halls', preco: 3.99, descricao: 'bala halls, pra que hein?' },
];
let idAtual = 6;

app.use(express.json());

// rota para adicionar um novo produto
app.post('/api/produtos', (req, res) => {
    const {nome, preco, descricao} = req.body;
    console.log(`${nome} - ${preco} - ${descricao}`);
    if (!nome || !preco || !descricao) {
        res.json({ erro: `Informações incompletas` });
    }
    produtos.push({id: ++idAtual, nome, preco, descricao});
    res.json({messagem: 'produto adicionado com sucesso.'})
   
});

// rota para recuperar todos os produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// rota para recuperar um produto pelo id
app.get('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((p) => p.id === id);
    if (!produto) {
        res.json({erro: `não existe produto com esse id = ${id}`});
    } else {
        res.json(produto);
    }
});

app.get('/', (req, res) => {
    res.json(
        {message: "Hello From API"}
    )
});

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
});
