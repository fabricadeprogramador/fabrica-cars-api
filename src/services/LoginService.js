const ClienteModel = require('./../models/Cliente')

module.exports = {
    autenticar: async(req, res) => {
        let user = await req.body

        if (user.email && user.senha) {

            let usuarioEncontrado = await ClienteModel.find({ email: user.email, senha: user.senha })

            if (usuarioEncontrado) {
                let resposta = {}
                resposta.cliente = usuarioEncontrado._id
                resposta.token = "FabricaToken"

                res.json(resposta)
            } else {
                res.json({
                    message: "Erro ao efetuar login: Credenciais inválidas!"
                })
            }
        } else {
            res.json({
                message: "Erro ao efetuar login: Faltando credenciais!"
            })
        }
    }
}