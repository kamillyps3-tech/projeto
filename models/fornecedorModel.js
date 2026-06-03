const connection = require ("../connection/connection")

class fornecedorModel{
    listar(){
        const sql = "select * from fornecedor"

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
    criar(novoFornecedor){
        const sql = "insert into fornecedor set ?"
        console.log("Dados do fornecedor a serem inseridos: ", novoFornecedor)

        return new Promise ((resolve, reject) =>{
          connection.query(sql, novoFornecedor, (error, resposta) =>{
            if(error){
              console.log("Erro ao inserir fornecedor")
              console.log(error.message)
              reject(error)
            }
          })
        })
    }
    atualizar(fornecedorAtualizado, id){
      const sql = "update fornecedor set ? where id=?"
      return new Promise ((resolve, reject ) => {
         connection.query(sql, [fornecedorAtualizado, id],(error, resposta) =>{
          if(error){
            console.log("Erro ao atualizar fornecedor")
            console.log(error.message)
            reject(error)
          }
          console.log("Fornecedor atualizado com sucesso.")
         }) 
      })
    }
    deletar(fornecedorExclusao, id){
      const sql = "delete from fornecedor where id=?"
      return new Promise ((resolve, reject) => {
          connection.query(sql, [fornecedorExclusao, id], (error, resposta) =>{
            if(error){
              console.log("Erro ao deletar o fornecedor")
              console.log(error.message)
              reject(error)
            }
            console.log("Fornecedor deletado com sucesso")
            resolve(resposta)
          })
      })
    }
}

module.exports = new fornecedorModel()


