const connection = require ("../connection/connection")

class produtoModel{
    listar(){
        const sql = "select * from produto"

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
    criar(novoProduto){
        const sql = "insert into produto set ?"
        console.log("Dados do produto a serem inseridos: ", novoProduto)

        return new Promise ((resolve, reject) =>{
          connection.query(sql, novoProduto, (error, resposta) =>{
            if(error){
              console.log("Erro ao inserir produto")
              console.log(error.message)
              reject(error)
            }
          })
        })
    }
    atualizar(produtoAtualizado, id){
      const sql = "update produto set ? where id=?"
      return new Promise ((resolve, reject ) => {
         connection.query(sql, [produtoAtualizado, id],(error, resposta) =>{
          if(error){
            console.log("Erro ao atualizar produto")
            console.log(error.message)
            reject(error)
          }
          console.log("Produto atualizado com sucesso.")
         }) 
      })
    }
    deletar(produtoExclusao, id){
      const sql = "delete from produto where id=?"
      return new Promise ((resolve, reject) => {
          connection.query(sql, [produtoExclusao, id], (error, resposta) =>{
            if(error){
              console.log("Erro ao deletar o produto")
              console.log(error.message)
              reject(error)
            }
            console.log("Produto deletado com sucesso")
            resolve(resposta)
          })
      })
    }
}

module.exports = new produtoModel()


