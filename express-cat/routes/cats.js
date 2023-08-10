var express = require('express');
var router = express.Router();
const catCtrl = require("../controllers/cats");

// New 
router.get("/new", catCtrl.new);

// Index
router.get("/", catCtrl.index);

// Create 
router.post("/", catCtrl.create);

// Show
router.get("/:id", catCtrl.show);

// Delete
router.delete("/:id", catCtrl.delete);


module.exports = router;
