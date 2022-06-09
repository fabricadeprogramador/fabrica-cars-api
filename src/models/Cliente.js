const mongoose = require("mongoose")
const { Schema } = mongoose

const clienteSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    required: true
  },
  dataNascimento: {
    type: Date,
    required: true
  },
  endereco: {
    type: String,
    required: true
  },
  usuario: {
    email: {
      type: String,
      required: true,
      unique: true
    },
    senha: {
      type: String,
      required: true,
      select: false
    }
  },
  compras: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Compra"
    }
  ],
  favoritos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Produto"
    }
  ]
})

module.exports = mongoose.model("Cliente", clienteSchema)
