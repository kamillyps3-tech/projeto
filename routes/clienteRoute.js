const clienteController = require("../controllers/clienteController")

const Router = require ("express").Router //EXPORTAÇÃO DO ROUTER DO PACOTE EXPRESS

const router = Router() // INSTÂNCIA


//CRUD

router.get("/clientes" , (req, res) => {
    const respcontroller = clienteController.buscar()

    respcontroller.then(clientes => res.status(200).json(clientes))
            .catch(error => res.status(400).json(error.message))
    res.send("Cliente consultado com sucesso!")
})

router.post("/cliente" , (req, res) => {
    const novoCliente = req.body
    const cliente = clienteController.criar(novoCliente)

    cliente.then(clienteInserido => res.status(201).json(clienteInserido))
            .catch(error => res.status(400).json(error.message))
    res.send("Cliente cadastrado com sucesso!")
})

router.put("/cliente:id" , (req, res) => {
    const {id} = req.params
    const clienteAtualizado = req.body
    const clienteAtualizar  = clienteController.alterar(clienteAtualizado, id)

    clienteAtualizar.then(resultAtualizado => res.status(201).json(resultAtualizado))
            .catch(error => res.status(400).json(error.message))
    res.send(`Cliente atualizado com sucesso! ${id}`)
})

router.delete("/cliente:id" , (req, res) => {
    const {id} = req.params
    const clienteDeletado = req.body
    const clienteDeletar = clienteController.apagar(clienteDeletado, id)

    clienteDeletar.then(clienteDeletado => res.status(200).json(clienteDeletado))
            .catch(error => res.status(400).json(error.message))
    res.send(`Cliente removido com sucesso! ${id}`)
})

module.exports = router