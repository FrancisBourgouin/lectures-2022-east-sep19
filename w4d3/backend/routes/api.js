var express = require("express");
const data = require("../data");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("index-api");
});

router.get("/images", function (req, res, next) {
  const amount = req.query.amount;
  if (!amount) {
    return res.json(data);
  }
  const list = {};
  for (let i = 1; i <= amount; i++) {
    list[i] = data[i];
  }
  return res.json(list);
});

router.get("/images/:id", function (req, res, next) {
  return res.json(data[req.params.id]);
});

module.exports = router;
