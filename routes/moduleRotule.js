//  AQUIVO ONDE EXPORTA TODAS AS ROTAS CRIADAS

const routerCliente = require("./clienteRoute")
const routerFornecedor  = require("./fornecedorRoute")
const routerProduto = require ("./produtoRoute")

module.exports = (app) => {
    app.use(routerCliente)
    app.use(routerFornecedor)    
    app.use(routerProduto)
}


