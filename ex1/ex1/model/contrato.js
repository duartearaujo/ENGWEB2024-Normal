const mongoose = require('mongoose');

const contratoSchema = new mongoose.Schema({
    idcontrato: String,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: String,
    prazoExecucao: String,
    NIPC_entidade_comunicante: String,
    entidade_comunicante: String,
    fundamentacao: String
});

const contrato = mongoose.model('contrato', contratoSchema);

module.exports = contrato;