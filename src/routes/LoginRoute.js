const express = require("express")
const router = express.Router()
const LoginService = require("./../services/LoginService")

router.post("", async(req, res) => {
    try {
        const resposta = await LoginService.autenticar(req.body)
        res.json(resposta)
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

module.exports = router