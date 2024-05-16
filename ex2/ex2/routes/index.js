var express = require('express');
var router = express.Router();
var contrato_cnt = require('../controller/contrato');

/* GET home page. */

router.get('/', function(req, res, next) {
  contrato_cnt.list()
    .then(dados => {
      res.status(200).render('index', { title: 'Express' , lContratos: dados});
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.get('/:id', function(req, res, next) {
  contrato_cnt.lookUp(req.params.id)
    .then(dados => {
      res.status(200).render('contratoPage', { contrato: dados })
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

router.get('/entidades/:nipc', function(req, res, next) {
  contrato_cnt.contratosByNIPC(req.params.nipc) 
    .then(dados => {
      var ent = dados[0].entidade;
      res.status(200).render('entidadePage', { nipc: req.params.nipc, entidade: ent, contratos: dados })
    })
    .catch(erro => {
      res.status(500).jsonp(erro)
    });
});

module.exports = router;

