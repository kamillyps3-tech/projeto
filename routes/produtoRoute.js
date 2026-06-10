const Router = require("express").Router;

const router = Router();

const produtoController = require("../controllers/produtoController");

// CRUD

router.get("/produtos", (req, res) => {
    const respController = produtoController.buscar();

    respController
        .then(produtos => res.status(200).json(produtos))
        .catch(error => res.status(400).json(error.message));
});

router.post("/produtos", (req, res) => {
    const novoProduto = req.body;

    const produto = produtoController.criar(novoProduto);

    produto
        .then(produtoInserido => res.status(201).json(produtoInserido))
        .catch(error => res.status(400).json(error.message));
});

router.put("/produto/:id", (req, res) => {
    const { id } = req.params;

    const produtoAtualizado = req.body;

    const produtoAtualizar = produtoController.alterar(
        produtoAtualizado,
        id
    );

    produtoAtualizar
        .then(resultAtualizado => res.status(200).json(resultAtualizado))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/produto/:id", (req, res) => {
    const { id } = req.params;

    const produtoDeletar = produtoController.apagar(id);

    produtoDeletar
        .then(produtoDeletado => res.status(200).json(produtoDeletado))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;
