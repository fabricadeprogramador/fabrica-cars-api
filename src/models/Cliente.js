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
        bairro: {
            type: String,
            required: true
        },
        cep: {
            type: String,
            required: true
        },
        complemento: {
            type: String,
            required: false
        },
        localidade: {
            type: String,
            required: true
        },
        logradouro: {
            type: String,
            required: true
        },
        numero: {
            type: Number,
            required: true
        },
        uf: {
            type: String,
            required: true
        }
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
    compras: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Compra"
    }],
    favoritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Produto"
    }]
})

module.exports = mongoose.model("Cliente", clienteSchema)