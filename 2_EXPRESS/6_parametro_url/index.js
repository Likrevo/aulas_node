const express = require("express")
const app = express()

const path = require("path")

const caminho = path.join(__dirname, "templates")

app.get('/usuarios/:id', (requisicao, reposta) => {
    const id = requisicao.params.id
    console.log(`O usuário ${id} está desaparecido.`)
    reposta.sendFile(`${caminho}/usuarios.html`)
})

app.get("/", (requisicao, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
})