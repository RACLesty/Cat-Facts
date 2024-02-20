var express = require("express");
var router = express.Router();

const axios = require("axios");
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

router.get("/cats/fact", async (req, res) => {
  const re = await axios.get("https://catfact.ninja/fact");
  const fact = res.data.fact;
  res.render("cat/fact", { fact });
});

module.exports = router;
