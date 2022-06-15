const clienteModel = require("./../models/Cliente")

module.exports = {
  buscarPorId: async (id) => {
    try {
      let novoCliente = await clienteModel.findOne({ _id: id })
      novoCliente.compras = undefined
      novoCliente.favoritos = undefined

       return await novoCliente
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  }, 

  buscarCompleto: async (id) => { 
    try {
      return await clienteModel.findOne({ _id: id })
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  }, 
  
  cadastrar: async (cliente) => { 
    try {
      let novoCliente = await clienteModel.create(cliente)
      novoCliente.usuario.senha = undefined
      return novoCliente
    } catch (error) {
      throw { message: error.message, status: 500 }
    }  
  },
  
  editar: async (id, cliente) => {
    try {
      return await clienteModel.updateOne({ _id: id }, cliente)
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  },
  
  deletar: async (id) => {
    try {
      return await clienteModel.findOneAndRemove({ _id: id })
    } catch (error) {
      throw { message: error.message, status: 500 }
    }
  }
}
