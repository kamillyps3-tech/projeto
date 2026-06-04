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
    createTableFornecedor(){
const sql = 
    `CREATE TABLE IF NOT EXISTS fornecedores(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100),
    telefone VARCHAR (15),
    email VARCHAR (100),
    endereco VARCHAR (150)
    );
    `
    this.connection.query(sql, (error) =>{
        if(error){
        console.log("Erro ao criar tabela Fornecedores")
        console.log(error.message)
        return
    }

    console.log("Tabela Fornecedores criada com sucesso")

    })
}
    createTableProduto(){
const sql = 
    `CREATE TABLE IF NOT EXISTS produtos(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    nome VARCHAR (100),
    descricao VARCHAR (200),
    preco DECIMAL (10,2),
    estoque INT 
    );
    `
    this.connection.query(sql, (error) =>{
        if(error){
        console.log("Erro ao criar tabela Produtos")
        console.log(error.message)
        return
    }

    console.log("Tabela Produtos criada com sucesso")

    })
}
}
module.exports = new Tables()
