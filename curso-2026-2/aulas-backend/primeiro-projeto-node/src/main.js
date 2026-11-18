require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;

const middlewareLog = (req, res, next) => {
  console.log(`${req.method} - ${req.url} - foi executado!`);
  next();
};

app.use(express.json());
app.use(middlewareLog);

app.get('/', (req, res) => {
    // res.send('<h1>Hello World!</h1>');
    res.json({
        message: 'Hello World from Express/NodeJS'
    });
})

// servidor executando
app.listen(PORT, () => {
    console.log(`Aplicação do servidor executando em: http://localhost:${PORT}`);
})