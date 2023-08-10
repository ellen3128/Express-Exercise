var express = require('express');
var router = express.Router();
const catCtrl = require("../controllers/cats");

router.get("/new", catCtrl.new);

module.exports = router;
