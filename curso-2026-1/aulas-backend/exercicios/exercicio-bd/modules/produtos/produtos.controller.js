const ProdutoModel = require('./produtos.service');

// Criar um produto via controller
const criarProdutoController = async (req, res) => {
  try {
    const { nome, descricao, preco } = req.body;

    // Validação básica
    if (!nome || !descricao || !preco) {
      return res.status(400).json({
        error: 'Campos obrigatórios: nome, descricao e preco',
      });
    }

    const produto = await ProdutoModel.criarProduto({ nome, descricao, preco });

    res.status(201).json({
      message: 'Produto criado com sucesso',
      data: produto,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao criar produto',
      details: error.message,
    });
  }
};

// listar todos os produtos controller
const listarProdutosController = async (req, res) => {
  try {
    const produtos = await ProdutoModel.listarProdutos();

    res.status(200).json({
      message: 'Produtos listados com sucesso',
      data: produtos,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao listar produtos',
      details: error.message,
    });
  }
};

// buscar produto por id controller
const buscarProdutoPorIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const produto = await ProdutoModel.buscarProdutoPorId(id);

    if (!produto) {
      return res.status(404).json({
        error: 'Produto não encontrado',
      });
    }

    res.status(200).json({
      message: 'Produto encontrado',
      data: produto,
    });
  } catch (error) {
    res.status(500).json({
      error: 'Erro ao buscar produto',
      details: error.message,
    });
  }
};

// atualizar produto por id controller
const atualizarProdutoController = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, preco } = req.body;

    // Validação básica
    // if (!nome || !descricao || !preco) {
    //   return res.status(400).json({
    //     error: 'Campos obrigatórios: nome, descricao e preco'
    //   });
    // }

    const produto = await ProdutoModel.atualizarProduto(id, {
      nome,
      descricao,
      preco,
    });

    res.status(200).json({
      message: 'Produto atualizado com sucesso',
      data: produto,
    });
  } catch (error) {
    if (error.message.includes('Record to update not found')) {
      return res.status(404).json({
        error: 'Produto não encontrado',
      });
    }

    res.status(500).json({
      error: 'Erro ao atualizar produto',
      details: error.message,
    });
  }
};

// deletar um produto controller
const deletarProdutoController = async (req, res) => {
  try {
    const { id } = req.params;
    await ProdutoModel.deletar(id);

    res.status(200).json({
      message: 'Produto deletado com sucesso',
    });
  } catch (error) {
    if (error.message.includes('Record to delete does not exist')) {
      return res.status(404).json({
        error: 'Produto não encontrado',
      });
    }

    res.status(500).json({
      error: 'Erro ao deletar produto',
      details: error.message,
    });
  }
};

module.exports = {
  criarProdutoController,
  listarProdutosController,
  buscarProdutoPorIdController,
  atualizarProdutoController,
  deletarProdutoController,
};