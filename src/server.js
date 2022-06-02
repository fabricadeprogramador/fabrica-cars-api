const express = require("express")

const cors = require("cors")
const api = express()
const db = require("./db")

db.connect()

api.use(express.json())
api.use(
  cors({
    origin: "*"
  })
)

// Rota raíz
api.get("/", (req, res) => {
  res.send("Bem-vindo(a) ao Fabrica Cars API !!")
})

module.exports = api
