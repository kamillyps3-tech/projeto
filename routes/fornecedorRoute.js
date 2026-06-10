const Router = require("express").Router;

const router = Router();

const fornecedorController = require("../controllers/fornecedorController");

// CRUD

router.get("/fornecedores", (req, res) => {
    const respController = fornecedorController.buscar();

    respController
        .then(fornecedores => res.status(200).json(fornecedores))
        .catch(error => res.status(400).json(error.message));
});

router.post("/fornecedores", (req, res) => {
    const novoFornecedor = req.body;

    const fornecedor = fornecedorController.criar(novoFornecedor);

    fornecedor
        .then(fornecedorInserido => res.status(201).json(fornecedorInserido))
        .catch(error => res.status(400).json(error.message));
});

router.put("/fornecedor/:id", (req, res) => {
    const { id } = req.params;

    const fornecedorAtualizado = req.body;

    const fornecedorAtualizar = fornecedorController.alterar(
        fornecedorAtualizado,
        id
    );

    fornecedorAtualizar
        .then(resultAtualizado => res.status(200).json(resultAtualizado))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/fornecedor/:id", (req, res) => {
    const { id } = req.params;

    const fornecedorDeletar = fornecedorController.apagar(id);

    fornecedorDeletar
        .then(fornecedorDeletado => res.status(200).json(fornecedorDeletado))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;
