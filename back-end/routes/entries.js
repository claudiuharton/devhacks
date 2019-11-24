const express = require("express");
const router = express.Router();
const entriesController = require("../controllers").entries;

router.post("/t1", entriesController.enterStore);
router.post("/t2", entriesController.checkpointArrival);
router.post("/t3", entriesController.cashPointArrival);
router.post("/t4", entriesController.departure);
module.exports = router;
