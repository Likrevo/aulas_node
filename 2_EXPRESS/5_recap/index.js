const express = require("express")

const app = express()

app.get('/', (requisicao, resposta) => {
    reposta.send("Seja bem-vindo(a) ao meu servidor!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3001")
})

// http://localhost:3000