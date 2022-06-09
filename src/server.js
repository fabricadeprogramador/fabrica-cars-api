const express = require("express")
const clienteRoute = require("./routes/ClienteRoute")
const loginRoute = require("./routes/LoginRoute")
const compraRoute = require("./routes/CompraRoute")
const produtoRoute = require("./routes/ProdutoRoute")

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

api.use("/compra", compraRoute)
api.use("/produto", produtoRoute)
api.use("/login", loginRoute)
api.use("/cliente", clienteRoute)

// Rota raíz
api.get("/", (req, res) => {
  res.send("Bem-vindo(a) ao Fabrica Cars API !!")
})

module.exports = api
