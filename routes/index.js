var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/westeros", function (req, res, next) {
  res.json([
    {
      place: "Ponta Tempestade",
      house: "Baratheon",
    },
    {
      place: "Rochedo Casterly",
      house: "Lannister",
    },
    {
      place: "Atalaia da água cinzenta",
      house: "Reed",
    },
    {
      place: "Pedra do Dragão",
      house: "Baratheon",
    }
  ]);
});

module.exports = router;
