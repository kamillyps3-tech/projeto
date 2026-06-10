const clienteModel = require("../models/clienteModel");

class ClienteController {
    buscar() {
        return clienteModel.listar();
    }

    criar(novoCliente) {
        return clienteModel.criar(novoCliente);
    }

    alterar(clienteAtualizado, id) {
        return clienteModel.atualizar(clienteAtualizado, id);
    }

    apagar(id) {
        return clienteModel.deletar(id);
    }
}

module.exports = new ClienteController();
