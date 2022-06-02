const api = require("./server")
const port = process.env.PORT || 3000

api.listen(port, () => {
  console.log(`Fábrica Cars API rodando na porta ${port} ...`)
})
