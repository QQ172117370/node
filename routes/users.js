var express = require('express');

var router = express.Router();
const bqgFetch = require("./bqg")
const mwFetch = require("./mw")
const zdFetch = require("./zd")
const { f1, f2 } = require("./OCR.js")
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

router.get('/imgUrl', async function (req, res, next) {
  let aaa = await f1(req.query.url);
  //let aaa = await f2(url)
  let data = Buffer.from(aaa).toString('base64')
  console.log("base64完成");
  let aa = await f2("https://api.xhofe.top/ocr/b64/text", data)
  console.log('识别成功');
  res.send(aa);
});

module.exports = router;
