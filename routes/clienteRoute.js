const clienteController = require("../controllers/clienteController")

const Router = require("express").Router

const router = Router()

router.get("/clientes", (req, res) => {
    clienteController.buscar()
        .then(clientes => res.status(200).json(clientes))
        .catch(error => res.status(400).json(error.message))
})

router.post("/clientes", (req, res) => {
    const novoCliente = req.query

    clienteController.criar(novoCliente)
        .then(resultado => res.status(201).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

router.put("/clientes", (req, res) => {
    const id = req.query.id

    const clienteAtualizado = { ...req.query }
    delete clienteAtualizado.id

    clienteController.alterar(clienteAtualizado, id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

router.delete("/clientes", (req, res) => {
    const id = req.query.id

    clienteController.apagar(id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

module.exports = router
