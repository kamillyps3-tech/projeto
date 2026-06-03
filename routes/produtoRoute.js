const produtoController = require("../controllers/produtoController")

const Router = require ("express").Router //EXPORTAÇÃO DO ROUTER DO PACOTE EXPRESS

const router = Router() 

router.get("/produtos" , (req, res) => {
    const respcontroller = clienteController.buscar()

    respcontroller.then(produtos => res.status(200).json(produtos))
            .catch(error => res.status(400).json(error.message))
            res.send("Produto consultado com sucesso!")
})

router.post("/produto" , (req, res) => {
    const novoProduto = req.body
    const produto = produtoController.criar(novoProduto)

    produto.then(clienteInserido => res.status(201).json(produtoInserido))
            .catch(error => res.status(400).json(error.message))
            res.send("Produto cadastrado com sucesso!")
})

router.put("/produto:id" , (req, res) => {
    const {id} = req.params
    const produtoAtualizado = req.body
    const produtoAtualizar  = produtoController.alterar(produtoAtualizado, id)

    produtoAtualizar.then(resultAtualizado => res.status(201).json(resultAtualizado))
            .catch(error => res.status(400).json(error.message))
             res.send(`Produto atualizado com sucesso! ${id}`)
})

router.delete("/produto:id" , (req, res) => {
    const {id} = req.params
    const produtoDeletado = req.body
    const produtoDeletar = produtoController.apagar(produtoDeletado, id)

    produtoDeletar.then(produtoDeletado => res.status(200).json(produtoDeletado))
            .catch(error => res.status(400).json(error.message))
            res.send(`Produto removido com sucesso! ${id}`)
})

module.exports = router