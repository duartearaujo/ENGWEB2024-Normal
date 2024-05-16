var contrato = require('../model/contrato');

module.exports.list = () => {
    return contrato
        .find()
        .exec();
}

module.exports.lookUp = id => {
    return contrato
        .findOne({idcontrato : id})
        .exec();
}

module.exports.byentidade = entidade => {
    return contrato
        .find({NIPC_entidade_comunicante : entidade})
        .exec();
}

module.exports.byprocedimento = procedimento => {
    return contrato
        .find({tipoprocedimento : procedimento})
        .exec();
}

module.exports.entidadeList = () => {
    return contrato
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

module.exports.procedimentoList = () => {
    return contrato
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

module.exports.insert = c => {
    var novo = new contrato(c);
    return novo.save();
}

module.exports.remove = id => {
    return contrato
        .deleteOne({idcontrato : id})
        .exec();
}

module.exports.update = (id, c) => {
    return contrato
        .findOneAndUpdate({ idcontrato : id }, c, { new: true })    
        .exec();
}

