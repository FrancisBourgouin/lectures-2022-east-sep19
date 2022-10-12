const express = require("express");
const router = express.Router();
const data = require("../data");

/* GET home page. */
router.get("/", function (req, res, next) {
  const amount = req.query.amount;
  const templateVars = { title: "Lecture about AJAX", amount };

  if (amount) {
    const list = [];
    for (let i = 1; i <= amount; i++) {
      list.push(data[i]);
    }
    templateVars.list = list;
  }
  console.log(templateVars);
  res.render("index", templateVars);
});

module.exports = router;
