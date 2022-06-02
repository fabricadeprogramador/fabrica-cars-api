const mongoose = require("mongoose")
require("dotenv").config()
const currentEnv = process.NODE_ENV || process.env

const URI = `${currentEnv.DB_PROTOCOL}://${currentEnv.DB_USER}:${currentEnv.DB_PASSWORD}@${currentEnv.DB_HOST}/${currentEnv.DB_NAME}?${currentEnv.DB_OPTIONS}`

let db

module.exports = {
  connect: async () => {
    // console.log(`Tentando comunicar com banco: ${URI}`)
    db = await mongoose.connect(URI)
    console.log("Conexão com o banco de dados estabelecida com sucesso!")
  },

  getDB: () => {
    return db
  }
}
//URI de conexão: mongodb+srv://fabrica-fc:<password>@cluster0.yrjuo.mongodb.net/?retryWrites=true&w=majority
// USERNAME: fabrica - fc
// SENHA: fabricacarspass
