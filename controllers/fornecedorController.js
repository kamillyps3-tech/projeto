const fornecedorModel = require("../models/fornecedorModel");

class FornecedorController {
    buscar() {
        return fornecedorModel.listar();
    }

    criar(novoFornecedor) {
        return fornecedorModel.criar(novoFornecedor);
    }

    alterar(fornecedorAtualizado, id) {
        return fornecedorModel.atualizar(fornecedorAtualizado, id);
    }

    apagar(id) {
        return fornecedorModel.deletar(id);
    }
}

module.exports = new FornecedorController();
