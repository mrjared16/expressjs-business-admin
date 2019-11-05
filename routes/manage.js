var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  res.render('manage/user');
});

router.get('/stall', function(req, res, next) {
  res.render('manage/stall');
});

router.get('/product', function(req, res, next) {
  res.render('manage/product');
});

router.get('/order', function(req, res, next) {
  res.render('manage/order');
});
router.get('/edit', function(req, res, next) {
  res.render('manage/edit');
});
module.exports = router;
