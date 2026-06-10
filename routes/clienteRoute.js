const Router = require("express").Router;

const router = Router();

const clienteController = require("../controllers/clienteController");

// CRUD

router.get("/clientes", (req, res) => {
    const respController = clienteController.buscar();

    respController
        .then(clientes => res.status(200).json(clientes))
        .catch(error => res.status(400).json(error.message));
});

router.post("/clientes", (req, res) => {
    const novoCliente = req.body;
    const cliente = clienteController.criar(novoCliente);

    cliente
        .then(clienteInserido => res.status(201).json(clienteInserido))
        .catch(error => res.status(400).json(error.message));
});

router.put("/cliente/:id", (req, res) => {
    const { id } = req.params;
    const clienteAtualizado = req.body;

    const clienteAtualizar = clienteController.alterar(clienteAtualizado, id);

    clienteAtualizar
        .then(resultAtualizado => res.status(200).json(resultAtualizado))
        .catch(error => res.status(400).json(error.message));
});

router.delete("/cliente/:id", (req, res) => {
    const { id } = req.params;

    const clienteDeletar = clienteController.apagar(id);

    clienteDeletar
        .then(clienteDeletado => res.status(200).json(clienteDeletado))
        .catch(error => res.status(400).json(error.message));
});

module.exports = router;
