const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const app = express();
const router = require('./modules/produtos/produtos.routes');
const PORT = process.env.PORT; // const PORT = 3000

// middleware de log
const middlewareLog = (req, res, next) => {
  console.log(`[${new Date().toUTCString()}] - ${req.method} - ${req.url}`);
  next();
};
// aplicando middlewares em todas as rotas
app.use(middlewareLog);
app.use(express.json());

app.use('/api', router);

// rota raiz
app.get('/', (req, res) => {
  res.json('API de Produtos com Banco de Dados!');
});

app.listen(PORT, () => {
  console.log(`Servidor executando em: http://localhost:${PORT}`);
});
