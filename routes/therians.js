var express = require('express');
var router = express.Router();

/* GET therians listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a therian');
});

module.exports = router;
