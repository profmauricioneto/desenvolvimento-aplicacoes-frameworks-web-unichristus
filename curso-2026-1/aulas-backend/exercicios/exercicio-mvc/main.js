const express = require('express');
const app = express();
const router = require('./modules/produto/produto.routes.js');
const PORT = 3000;

// middleware de log
const middlewareLog = (req, res, next) => {
    console.log(`[${new Date().toUTCString()}] - ${req.method} - ${req.url}`);
    next();
}
// aplicando middlewares em todas as rotas
app.use(middlewareLog);
app.use(express.json());

app.use('/api', router);

// rota raiz
app.get('/', (req, res) => {
    res.json('API de Produtos!')
})

app.listen(PORT, () => {
    console.log(`Servidor executando em: http://localhost:${PORT}`);
})