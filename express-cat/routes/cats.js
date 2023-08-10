var express = require('express');
var router = express.Router();
const catCtrl = require("../controllers/cats");

// New 
router.get("/new", catCtrl.new);

// Create 
router.post("/", catCtrl.create);

module.exports = router;
