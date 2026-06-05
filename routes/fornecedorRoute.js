const fornecedorController = require("../controllers/fornecedorController")

const Router = require("express").Router

const router = Router()

router.get("/fornecedores", (req, res) => {
    fornecedorController.buscar()
        .then(fornecedores => res.status(200).json(fornecedores))
        .catch(error => res.status(400).json(error.message))
})

router.post("/fornecedores", (req, res) => {
    const novoFornecedor = req.query

    fornecedorController.criar(novoFornecedor)
        .then(resultado => res.status(201).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

router.put("/fornecedores", (req, res) => {
    const id = req.query.id

    const fornecedorAtualizado = { ...req.query }
    delete fornecedorAtualizado.id

    fornecedorController.alterar(fornecedorAtualizado, id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

router.delete("/fornecedores", (req, res) => {
    const id = req.query.id

    fornecedorController.apagar(id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

module.exports = router
