const  produtoModel = require("../models/produtoModel");

class ProdutoController {
    buscar() {
        return produtoModel.listar();
    }

    criar(novoProduto) {
        return produtoModel.criar(novoProduto);
    }

    alterar(produtoAtualizado, id) {
        return produtoModel.atualizar(produtoAtualizado, id);
    }

    apagar(id) {
        return produtoModel.deletar(id);
    }
}

module.exports = new ProdutoController();
