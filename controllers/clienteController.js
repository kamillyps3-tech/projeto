const clienteModel = require ("../models/clienteModel")

class clienteController {
    buscar(){
        return clienteModel.listar()
    }

    criar(novoCliente){
        return clienteModel.criar(novoCliente)
    }

    alterar(clienteAtualizado, id){
        return clienteModel.atualizar(clienteAtualizado, id)
    }

    apagar(clienteExclusao, id){
        return clienteModel.deletar(id)
    }
}

module.exports = new clienteController()
