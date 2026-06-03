const produtoModel = require ("../models/produtoModel")

class produtoController {
    buscar(){
        return produtoModel.listar()
    }

    criar(novoProduto){
        return produtoModelModel.criar(novoProduto)
    }

    alterar(produtoAtualizado, id){
        return produtoModel.atualizar(produtoAtualizado, id)
    }

    apagar(produtoExclusao, id){
        return produtoModel.deletar(id)
    }
}

module.exports = new produtoController()