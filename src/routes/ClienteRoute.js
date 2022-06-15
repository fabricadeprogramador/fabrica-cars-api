const express = require("express")
const router = express.Router()
const clienteService = require("./../services/ClienteService")


router.get("/:id", async (req, res) => {
    let resposta = await clienteService.buscarPorId(req.params.id)
  res.json(resposta)
})

router.get("/completo/:id", async (req, res) => {
    let resposta = await clienteService.buscarCompleto(req.params.id)
  res.json(resposta)
})

router.post("", async (req, res) => {
    let resposta = await clienteService.cadastrar(req.body)
  res.json(resposta)
})

router.put("/:id", async (req, res) => {
  let resposta = await clienteService.editar(req.params.id, req.body)
  res.json(resposta)
})

router.delete("/:id", async (req, res) => {
    let resposta = await clienteService.deletar(req.params.id)
  res.json(resposta)
})

module.exports = router
