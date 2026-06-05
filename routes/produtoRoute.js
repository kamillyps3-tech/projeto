const Router = require("express").Router

const router = Router()

router.get("/produtos", (req, res) => {
    produtoController.buscar()
        .then(fornecedores => res.status(200).json(fornecedores))
        .catch(error => res.status(400).json(error.message))
})

router.post("/produtos", (req, res) => {
    const novoProduto = req.query

    produtoController.criar(novoProduto)
        .then(resultado => res.status(201).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

router.put("/produtos", (req, res) => {
    const id = req.query.id

    const produtoAtualizado = { ...req.query }
    delete produtoAtualizado.id

    produtoController.alterar(produtoAtualizado, id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

router.delete("/produtos", (req, res) => {
    const id = req.query.id

    produtoController.apagar(id)
        .then(resultado => res.status(200).json(resultado))
        .catch(error => res.status(400).json(error.message))
})

module.exports = router
