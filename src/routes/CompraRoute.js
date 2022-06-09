const express = require("express")
const router = express.Router()
const compraService = require("./../services/CompraService")

router.get("/:id", async (req, res) => {
  return await compraService.buscarPorId(req.params.id)
})

router.post("", async (req, res) => {
  return await compraService.adicionar(req.body)
})
router.post("/inativar/:id", async (req, res) => {})

module.exports = router
