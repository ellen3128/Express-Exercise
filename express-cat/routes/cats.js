var express = require('express');
var router = express.Router();
const catCtrl = require("../controllers/cats");

// New 
router.get("/new", catCtrl.new);

// Index
router.get("/", catCtrl.index);

// Edit
router.get("/:id/edit", catCtrl.edit);

// Show
router.get("/:id", catCtrl.show);

// Create 
router.post("/", catCtrl.create);

// Delete
router.delete("/:id", catCtrl.delete);

// Update
router.put("/:id", catCtrl.update);

module.exports = router;
