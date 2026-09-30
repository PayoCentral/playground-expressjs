var express = require('express');
var router = express.Router();
debug = require('debug')('server:therians');

/* GET therians listing. */
router.get('/', function (req, res, next) {
  debug("Temp 1000 de aura");
  res.send('respond with a therian');
});

module.exports = router;
