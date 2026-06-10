require('dotenv').config();

const databaseUrl = process.env.DATABASE_URL;
const port = process.env.PORT;

console.log(`URL do banco de dados: ${databaseUrl}`);
console.log(`Porta: ${port}`);
