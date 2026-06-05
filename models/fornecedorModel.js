const connection = require ("../connection/connection")

class FornecedorModel{
    listar(){
        const sql = "SELECT * FROM fornecedores"

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
        const sql = "INSERT INTO fornecedores SET ?"
        console.log("Dados do fornecedor a serem inseridos: ", novoFornecedor)

        return new Promise ((resolve, reject) =>{
          connection.query(sql, novoFornecedor, (error, resposta) =>{
            if(error){
              console.log("Erro ao inserir fornecedor.")
              console.log(error.message)
              return
              reject(error)
            } 
              console.log("Fornecedor inserido com sucesso.")
              resolve(resposta)
            
          })
        })
    }
  atualizar(fornecedorAtualizado, id){
  const sql = "UPDATE fornecedores SET ? WHERE id=?"

  return new Promise((resolve, reject) => {
    connection.query(sql, [fornecedorAtualizado, id], (error, resposta) => {
      if(error){
        return reject(error)
      }

      console.log("Fornecedor atualizado com sucesso.")
      resolve(resposta)
    })
  })
}
deletar(id){
  const sql = "DELETE FROM fornecedores WHERE id=?"

  return new Promise((resolve, reject) => {
    connection.query(sql, [id], (error, resposta) => {
      if(error){
        console.log("Erro ao deletar o fornecedor.")
        console.log(error.message)
        return reject(error)
      }
      console.log("Fornecedor deletado com sucesso.")
      resolve(resposta)
    })
  })
}
}

module.exports = new FornecedorModel()


