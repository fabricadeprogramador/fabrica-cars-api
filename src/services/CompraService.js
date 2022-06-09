const compraModel = require("./../models/Compra")

module.exports = {
  buscarPorId: async (id) => {
    try {
      return await compraModel.findOne({ _id: id })
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },

  adicionar: async (compra) => {
    try {
      return await compraModel.create(compra)
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  }
}
