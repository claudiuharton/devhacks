const express = require("express");
const router = express.Router();
const entriesController = require("../controllers").entries;

router.post("/t1", entriesController.enterStore);
module.exports = router;
