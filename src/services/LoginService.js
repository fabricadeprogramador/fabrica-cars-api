const ClienteModel = require('./../models/Cliente')

module.exports = {
    autenticar: async(req, res) => {
        let usuario = req.body

        if (usuario.email && usuario.senha) {

            let usuarioEncontrado = ClienteModel.findOne((perfil) => { perfil.usuario.email == usuario.email && perfil.usuario.senha == usuario.senha })

            if (usuarioEncontrado) {
                let resposta = {}
                resposta.cliente = usuarioEncontrado._id
                resposta.token = "FabricaToken"

                res.json(resposta)
            } else {
                res.status(200).json({
                    message: "Erro ao efetuar login: Credenciais inválidas!"
                })
            }
        } else {
            res.status(400).json({
                message: "Erro ao efetuar login: Faltando credenciais!"
            })
        }
    }
}