// Importa as dependências necessárias
const express = require('express');
const mongoose = require('mongoose');

// Cria uma instância do aplicativo Express
const app = express();

// Define a porta do servidor
const port = process.env.PORT || 3000;
const router = require('./Routers/index');

// Middleware para analisar o corpo das requisições como JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
router(app);

// Inicia o servidor na porta especificada
app.listen(port, (error) => {
    if (error) {
        console.log('Ocorreu um erro ao iniciar o servidor');
        return;
    }
    console.log(`Servidor está funcionando na porta ${port}`);
});

// Conecta-se ao banco de dados MongoDB
mongoose.connect("mongodb+srv://Sairth:JFnCMaQYjlBTm3Gi@backenddb.ndngmg0.mongodb.net/node-api?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("Banco de dados foi conectado");
    })
    .catch(() => {
        console.log("A conexão com o banco de dados falhou");
    });
