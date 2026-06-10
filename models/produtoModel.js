const connection = require("../connection/connection");

class ProdutoModel {

    listar() {
        const sql = "SELECT * FROM produtos";

        return new Promise((resolve, reject) => {
            connection.query(sql, (error, resposta) => {

                if (error) {
                    console.log("Ocorreu um erro na consulta.");
                    reject(error);
                    return;
                }

                console.log("Consulta realizada com sucesso.");
                resolve(resposta);
            });
        });
    }

    criar(novoProduto) {
        const sql = "INSERT INTO produtos SET ?";

        console.log("Dados do produto a serem inseridos:", novoProduto);

        return new Promise((resolve, reject) => {
            connection.query(sql, novoProduto, (error, resposta) => {

                if (error) {
                    console.log("Erro ao inserir produto");
                    console.log(error.message);
                    reject(error);
                    return;
                }

                console.log("Produto inserido com sucesso.");
                resolve(resposta);
            });
        });
    }

    atualizar(produtoAtualizado, id) {
        const sql = "UPDATE produtos SET ? WHERE id = ?";

        return new Promise((resolve, reject) => {
            connection.query(sql, [produtoAtualizado, id], (error, resposta) => {

                if (error) {
                    console.log("Erro ao atualizar produto");
                    console.log(error.message);
                    reject(error);
                    return;
                }

                console.log("Produto atualizado com sucesso.");
                resolve(resposta);
            });
        });
    }

    deletar(id) {
        const sql = "DELETE FROM produtos WHERE id = ?";

        return new Promise((resolve, reject) => {
            connection.query(sql, [id], (error, resposta) => {

                if (error) {
                    console.log("Erro ao deletar o produto");
                    console.log(error.message);
                    reject(error);
                    return;
                }

                console.log("Produto deletado com sucesso.");
                resolve(resposta);
            });
        });
    }
}

module.exports = new ProdutoModel();
