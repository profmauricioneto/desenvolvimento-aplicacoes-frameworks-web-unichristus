const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

// app.get('/', (req, res) => {
//     res.json({ message: 'Hello World from Express!'})
// });

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', function(error, data){
        res.send(data);
        res.end();
    })
})




app.listen(PORT, () => {
    console.log(`Servidor ativo em: http://localhost:${PORT}`);
})