const { PrismaClient } = require('../../generated/prisma');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
require('dotenv/config');

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// criar um produto
const criarProduto = async produto => {
  try {
    return await prisma.produto.create({
      data: {
        nome: produto.nome,
        descricao: produto.descricao,
        preco: produto.preco,
      },
    });
  } catch (error) {
    throw new Error(`Erro ao criar produto: ${error.message}`);
  }
};

// buscar produtos
const listarProdutos = async () => {
  try {
    return await prisma.produto.findMany({
      orderBy: {
        id: 'asc',
      },
    });
  } catch (error) {
    throw new Error(`Erro ao listar produtos: ${error.message}`);
  }
};

// buscar produto por id
const buscarProdutoPorId = async id => {
  try {
    return await prisma.produto.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    throw new Error(`Erro ao buscar produto: ${error.message}`);
  }
};

// atualizar um produto
const atualizarProduto = async (id, produto) => {
  try {
    const produtoEncontrado = await buscarProdutoPorId(id);

    if (!produtoEncontrado) {
      console.error(`Produto não encontrado!`);
      throw new Error(`Produto não encontrado!`);
    }

    return await prisma.produto.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nome: produto.nome || produtoEncontrado.nome,
        descricao: produto.descricao || produtoEncontrado.descricao,
        preco: produto.preco || produtoEncontrado.preco,
      },
    });
  } catch (error) {
    throw new Error(`Erro ao atualizar produto: ${error.message}`);
  }
};

// deletar um produto
const deletarProduto = async id => {
  try {
    return await prisma.produto.delete({
      where: {
        id: parseInt(id),
      },
    });
  } catch (error) {
    throw new Error(`Erro ao deletar produto: ${error.message}`);
  }
};

module.exports = {
  criarProduto,
  listarProdutos,
  buscarProdutoPorId,
  atualizarProduto,
  deletarProduto,
};
