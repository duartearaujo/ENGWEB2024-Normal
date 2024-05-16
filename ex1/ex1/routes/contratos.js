var express = require('express');
var router = express.Router();
var contrato_cnt = require('../controller/contrato');

/* GET home page. */

router.get('/contratos', function(req, res, next) {
  contrato_cnt.list()
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.get('/contratos/:id', function(req, res, next) {
  contrato_cnt.lookUp(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.get('/contratos?entidade=:entidade', function(req, res, next) {
  contrato_cnt.byentidade(req.params.entidade) 
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.get('/contratos?tipo=:tipo', function(req, res, next) {
  contrato_cnt.byprocedimento(req.params.tipo) 
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.get('/contratos/entidades', function(req, res, next) {
  contrato_cnt.entidadeList()
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.get('/contratos/tipos', function(req, res, next) {
  contrato_cnt.procedimentoList()
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.post('/contratos', function(req, res, next) {
  contrato_cnt.insert(req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.delete('/contratos/:id', function(req, res, next) {
  contrato_cnt.remove(req.params.id)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.put('/contratos/:id', function(req, res, next) {
  contrato_cnt.update(req.params.id, req.body)
    .then(dados => {
      res.jsonp(dados)
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

module.exports = router;
