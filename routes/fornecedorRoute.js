const fornecedorController = require("../controllers/fornecedorController")

const Router = require ("express").Router //EXPORTAÇÃO DO ROUTER DO PACOTE EXPRESS

const router = Router() // INSTÂNCIA


//CRUD

router.get("/fornecedores" , (req, res) => {
    const respcontroller = fornecedorController.buscar()

    respcontroller.then(fornecedores => res.status(200).json(fornecedores))
            .catch(error => res.status(400).json(error.message))
            res.send("Fornecedor consultado com sucesso!")
})

router.post("/fornecedor" , (req, res) => {
    const novoFornecedor = req.body
    const fornecedor = fornecedorController.criar(novoFornecedor)

    fornecedor.then(fornecedorInserido => res.status(201).json(fornecedorInserido))
            .catch(error => res.status(400).json(error.message))
            res.send("Fornecedor cadastrado com sucesso!")
})

router.put("/fornecedor:id" , (req, res) => {
    const {id} = req.params
    const fornecedorAtualizado = req.body
    const fornecedorAtualizar  =  fornecedorController.alterar(fornecedorAtualizado, id)

    fornecedorAtualizar.then(resultAtualizado => res.status(201).json(resultAtualizado))
            .catch(error => res.status(400).json(error.message))
             res.send(`Fornedor atualizado com sucesso! ${id}`)
})

router.delete("/fornecedor:id" , (req, res) => {
    const {id} = req.params
    const fornecedorDeletado = req.body
    const fornecedorDeletar = fornecedorController.apagar(fornecedorDeletado, id)

    fornecedorDeletar.then(fornecedorDeletado => res.status(200).json(fornecedorDeletado))
            .catch(error => res.status(400).json(error.message))
            res.send(`Fornecedor removido com sucesso! ${id}`)
})

module.exports = router