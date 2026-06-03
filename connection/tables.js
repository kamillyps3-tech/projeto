class Tables{
    init(connection){
        this.connection = connection
        this.createTableCliente()
        this.createTableFornecedor() 
        this.createTableProduto()    
}   
    createTableCliente(){
const sql = 
    `CREATE TABLE IF NOT EXISTS clientes(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100) NOT NULL,
    email VARCHAR (100) NOT NULL UNIQUE,        
    telefone VARCHAR (15),
    data_de_nascimento DATE,
    data_cadastro DATE
    );
    `
    this.connection.query(sql, (error) =>{
        if(error){
        console.log("Erro ao criar tabela Clientes")  
        console.log(error.message)
        return    
    }
    
    console.log("Tabela criada com sucesso")    
        
    })
}
}
module.exports = new Tables()