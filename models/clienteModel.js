const connection = require ("../connection/connection")

class clienteModel{
    listar(){
        const sql = "select * from clientes"

        return new Promise ((resolve, reject) => {
          connection.query(sql, {}, (error, resposta) => {
      
            if(error){
                console.log("Ocorreu um erro na consulta.")
                reject(error)
            }
            
            console.log("Consulta realizada com sucesso.")
            resolve(resposta)    

          })
        })
    }
    criar(novoCliente){
        const sql = "insert into clientes set ?"
        console.log("Dados do cliente a serem inseridos: ", novoCliente)

        return new Promise ((resolve, reject) =>{
          connection.query(sql, novoCliente, (error, resposta) =>{
            if(error){
              console.log("Erro ao inserir cliente")
              console.log(error.message)
              reject(error)
            }
          })
        })
    }
    atualizar(clienteAtualizado, id){
      const sql = "update cliente set ? where id=?"
      return new Promise ((resolve, reject ) => {
         connection.query(sql, [clienteAtualizado, id],(error, resposta) =>{
          if(error){
            console.log("Erro ao atualizar cliente")
            console.log(error.message)
            reject(error)
          }
          console.log("Cliente atualizado com sucesso.")
         }) 
      })
    }
    deletar(clienteExclusao, id){
      const sql = "delete from clientes where id=?"
      return new Promise ((resolve, reject) => {
          connection.query(sql, [clienteExclusao, id], (error, resposta) =>{
            if(error){
              console.log("Erro ao deletar o cliente")
              console.log(error.message)
              reject(error)
            }
            console.log("Cliente deletado com sucesso")
            resolve(resposta)
          })
      })
    }
}

module.exports = new clienteModel()


