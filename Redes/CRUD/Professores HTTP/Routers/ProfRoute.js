const { Router } = require('express');
const router = Router(); 
const Info = require('../models/info.model');

// Rota para buscar todos os professores
router.get('/professores', async (req, res) => {
    try{
        // Busca todas as informações de professores no banco de dados
        const infos = await Info.find(req.body);
        // Retorna os dados dos professores em formato JSON
        res.status(200).json(infos);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
});

// Rota para buscar um professor específico por ID
router.get('/professores/:id', async(req, res) =>{
    try{
        const { id } = req.params; // Obtém o ID do parâmetro da URL
        // Busca as informações do professor pelo ID
        const info = await Info.findById(id);
        res.status(200).json(info);
    }
    catch(error){
        res.status(500).json({ message: error.message });  
    }
});

// Rota para criar um novo professor
router.post('/professores/por', async (req, res) => {
    try{
        // Cria um novo professor com os dados fornecidos no corpo da requisição
        const info = await Info.create(req.body);
        res.status(200).json(info);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});

// Rota para atualizar informações de um professor existente por ID
router.put('/professores/att/:id', async (req, res) => {
    const { id } = req.params; // Obtém o ID do parâmetro da URL
    try{
        // Atualiza as informações do professor com os dados fornecidos no corpo da requisição
        const info = await Info.findByIdAndUpdate(id, req.body);
        // Se o professor não for encontrado, retorna um status 404 com uma mensagem de erro
        if(!info){
            return res.status(404).json({ message: 'Professor não encontrado' });
        }
        // Busca novamente as informações atualizadas do professor pelo ID
        const infoatt = await Info.findById(id);
        res.status(200).json(infoatt);
    }
    catch(error){
        res.status(500).json({ message: error.message });
    }
});

// Rota para excluir um professor por ID
router.delete('/professores/del/:id', async(req, res) => {
    try {
        const { id } = req.params; // Obtém o ID do parâmetro da URL
        // Exclui o professor pelo ID
        const info = await Info.findByIdAndDelete(id);
        // Se o professor não for encontrado, retorna um status 404 com uma mensagem de erro
        if(!info){
            return res.status(404).json({ message: 'Professor não encontrado' });
        }
        // Retorna uma mensagem de sucesso após excluir o professor
        res.status(200).json({ info, message: 'Informações apagadas com sucesso' });
    } 
    catch(error){
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; // Exporta as rotas configuradas para uso em outros arquivos
