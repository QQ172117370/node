var express = require('express');

var router = express.Router();
const bqgFetch = require("./bqg")
const mwFetch = require("./mw")
const zdFetch = require("./zd")
/* GET users listing. */
router.get('/bqg', async function(req, res, next) {
  img = await bqgFetch(req.query.url);
  //res.send(img);
  res.setHeader("Content-Type", "image/jpg");
  res.end(img);
});

router.get('/mw', async function(req, res, next) {
  img = await mwFetch(req.query.url);
  //res.send(img);
  res.setHeader("Content-Type", "image/jpg");
  res.end(img);
});

router.get('/zzd', async function(req, res, next) {
  let json = await zdFetch(req.query.key);
  res.send(json);
});



module.exports = router;
