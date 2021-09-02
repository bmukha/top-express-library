const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});


module.exports = router;
