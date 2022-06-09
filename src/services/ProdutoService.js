const produtoModel = require("./../models/Produto")

module.exports = {
  buscarTodos: async () => {
    try {
      return await produtoModel.find({})
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },

  buscarPorId: async (id) => {
    try {
      return await produtoModel.findOne({ _id: id })
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },

  adicionar: async (produto) => {
    try {
      return await produtoModel.create(produto)
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },

  deletar: async (id) => {
    try {
      return await produtoModel.findOneAndRemove({ _id: id })
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },

  editar: async (id, produto) => {
    try {
      return await produtoModel.updateOne({ _id: id }, produto)
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  }
}
