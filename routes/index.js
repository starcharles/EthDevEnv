var express = require('express');
var ethinfo = require('./lib/ethInfo');
var greeter = require('./lib/'+'greeter');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Ethereum app for node information',
    coinbase: ethinfo.getCoinbase,
    balance: ethinfo.getBalance
  });

});

module.exports = router;
