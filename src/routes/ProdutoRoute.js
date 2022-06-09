const express = require("express")
const router = express.Router()
const produtoService = require("./../services/ProdutoService")

router.get("", async (req, res) => {
  let resposta = await produtoService.buscarTodos()
  res.json(resposta)
})
router.get("/:id", async (req, res) => {
  let resposta = await produtoService.buscarPorId(req.params.id)
  res.json(resposta)
})

router.post("", async (req, res) => {
  let resposta = await produtoService.adicionar(req.body)
  res.json(resposta)
})
router.put("/:id", async (req, res) => {
  let resposta = await produtoService.editar(req.params.id, req.body)
  res.json(resposta)
})
router.delete("/:id", async (req, res) => {
  let resposta = await produtoService.deletar(req.params.id)
  res.json(resposta)
})

module.exports = router
