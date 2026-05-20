const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("<h1>Olá, bem vindo ao meu servidor web!</h1>")
});

app.get('/sobre', (req, res) => {
    res.send(`<h2>Projeto criado usando Express por Maurício Neto</h2>`)
})

app.get('/usuarios/:nome', (req, res) => {
    const {nome} = req.params;
    res.send(`<h2>Bem vindo senhor(a) ${nome.toUpperCase()}</h2>`);
})

app.listen(PORT, () => {
    console.log(`Servidor ativo em: http://localhost:${PORT}`);
})