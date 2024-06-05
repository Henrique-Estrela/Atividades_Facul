const mongoose = require("mongoose");

// Define o esquema para os dados
const InfoSchema = mongoose.Schema({
    // Campo para o nome
    nome: {
        type: String, 
        require: [true, 'Por favor coloque um nome'], 
        default: '' 
    },
    // Campo para o email
    email:{
        type: String, 
        require: false, 
        default: '' 
    },
    // Campo para o CPF
    cpf:{
        type: Number, 
        require: [true, 'Por favor informe um cpf'], 
        default: 0 
    },
    // Campo para a matéria do professor
    materia:{
        type: String, 
        require: [true, 'Por favor informe a matéria do professor'], 
        default: '' 
    },
},
{
    timestamps: true // Habilita a adição automática dos campos createdAt e updatedAt
}
);

// Cria o modelo a partir do esquema
const Info = mongoose.model('Info', InfoSchema);

// Exporta o modelo para uso em outros arquivos
module.exports = Info;
