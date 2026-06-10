const express = require ("express")
const app = express()
const port = 3000 


const router = require ("./routes/moduleRoute.js")
const conexao = require ("./connection/connection.js")
const table = require ("./connection/tables.js")

app.use(express.json()) // altera o formato json
app.use(express.urlencoded({extended: true})) //aceita o formato urlencoded

table.init(conexao)
router(app)

//o servidor que chama as rotas
app.listen(port, (error) => {
    if(error) {
        console.error(error)
        return
    }
    else{
        console.log("servidor rodando na porta: " + port) 
    }
})
