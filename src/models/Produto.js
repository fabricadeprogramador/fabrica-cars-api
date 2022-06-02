const mongoose = require("mongoose")
const { Schema } = mongoose

const produtoSchema = new Schema({
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
})

module.exports = mongoose.model("Produto", produtoSchema)
