var express = require('express');
var router = express.Router();
debug = require('debug')('server:therians');

/* GET therians listing. */
router.get('/', function (req, res, next) {
  debug("devolvería todos los therians");
  res.send('respond with a therian');
});

/* GET therians listing */
router.get('/:pais/:nombre', function (req, res, next) {
  debug("devolvería un therian por nombre " + req.params.nombre + " de país " + req.params.pais);
  res.send('respond with a therian ' + req.params.nombre);
});

router.get('/:pais/:nombre', function (req, res, next) {
  if (req.query.orden == "asc") {
    debug("ascendente");
  } else {
    debug("descendente");
  }
  debug("devolvería un therian por nombre " + req.params.nombre + " de país " + req.params.pais);
  res.send('respond with a therian ' + req.params.nombre);
});

module.exports = router;
