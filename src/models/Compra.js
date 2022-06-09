const mongoose = require("mongoose")
const { Schema } = mongoose

const compraSchema = new Schema({
  produtos: [
    {
      nome: {
        type: String,
        required: true
      },
      descricao: {
        type: String,
        required: false
      },
      preco: {
        type: Number,
        required: true
      },
      categoria: {
        type: String,
        enum: ["Novo", "Semi-novo", "Usado"],
        required: true
      },
      ano: {
        type: Number,
        required: true
      },
      modelo: {
        type: String,
        required: true
      },
      marca: {
        type: String,
        required: true
      },
      cor: {
        type: String,
        required: true
      },
      imagem: {
        type: String,
        required: true
      },
      quilometragem: {
        type: Number,
        required: true
      }
    }
  ],
  valorTotal: {
    type: Number,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  formaPagamento: {
    type: String,
    enum: ["Débito", "Crédito", "Dinheiro"],
    required: true
  },
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true
  }
})

module.exports = mongoose.model("Compra", compraSchema)
