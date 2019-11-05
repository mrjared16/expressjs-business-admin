var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sales', function(req, res, next) {
  res.render('chart/sales');
});

router.get('/top', function(req, res, next) {
  res.render('chart/top');
});

module.exports = router;
