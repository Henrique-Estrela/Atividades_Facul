var express = require('express');

var app = express();

app.use(express.json()); 

app.get('/ola-nome', async (req, res) => {
    try{
        res.status(200).send("Olá, mundo");
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
});


app.post('/ola-nome/', async (req, res) => {
    try{
        const nome = req.body.nome; // Extraindo nome e email do corpo da requisição
        res.status(200).send("\nOlá, " + nome); // Retornando apenas o nome
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, function(){
    console.log("Servidor iniciado!")
})



