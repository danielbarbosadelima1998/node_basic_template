const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())
app.get('/', (req,res) => {
    console.log("Bem vindo!")
    res.send('Ok')
})

app.post('/', (req,res) => {
    console.log("Post: ", JSON.stringify(req.body, null, 2))
    res.send('Ok')
})

app.listen(4000, () => {
    console.log("rodando na porta 4000")
    
})
