/**
 * Modelo de dados para construção da coleção ("tabela")
 * Ordem de Serviço de Smartphone
 */

// importação dos recursos do framework mongoose
const { model, Schema } = require('mongoose')

// criação da estrutura da coleção Ordem de Serviço
const ordemServicoSchema = new Schema({
    cliente: {
        nomeCliente: {
            type: String,
            required: true
        },
        cpfCliente: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        emailCliente: {
            type: String,
            required: true
        },
        foneCliente: {
            type: String,
            required: true
        },
        enderecoCliente: {
            tipo: String,
            required: true
        },
    },
    // Informações sobre o smartphone
    dispositivo: {
        marca: {
            type: String,
            required: true
        },
        modelo: {
            type: String,
            required: true
        },
        imei: {
            type: String,
            required: true,
            unique: true
        },
        cor: {
            type: String,
        },
        memoria: {
            type: String, // Ex: "64GB", "128GB", etc.
        },
        sistemaOperacional: {
            type: String, // Ex: Android, iOS
        },
        numeroSerie: {
            type: String
        },
    },
    // Detalhes do serviço
    tipoServico: {
        type: String, // Ex: "Troca de Tela", "Conserto de Bateria", etc.
        required: true
    },
    descricaoServico: {
        type: String, // Descrição do problema ou serviço solicitado
        required: true
    },
    statusServico: {
        type: String, // Ex: "Em andamento", "Concluído", "Aguardando Peças", etc.
        required: true,
        default: "Em andamento"
    },
    dataRecebimento: {
        type: Date,
        required: true,
        default: Date.now
    },
    dataPrevistaConclusao: {
        type: Date, // Estimativa de quando o serviço será concluído
        required: true
    },
    dataConclusao: {
        type: Date // Quando o serviço foi realmente concluído
    },
    valorServico: {
        type: Number, // Valor estimado ou final do serviço
        required: true
    },
    // Informações adicionais sobre o serviço
    observacoes: {
        type: String
    }
}, { versionKey: false }) // não versionar os dados armazenados

// exportar para o main o modelo de dados
// OBS: Ordem de Serviço será o nome da coleção
module.exports = model('OrdemDeServico', ordemServicoSchema)
