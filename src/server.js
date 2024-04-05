//chama a biblioteca
const express = require("express")
const routes = require("./routes")

//atribuindo app e json
const app = express ()

app.use(express.json())
app.use(routes)

//porta de servidor
const PORT = 3333

//identificando erro
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Algo deu errado")
})

//mensagem de confirmação
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`)
})