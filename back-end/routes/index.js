const express = require("express");
const router = express.Router();
const otherRouter = require("./other");
const employeeController = require("./employee");
const customerController = require("./customer");

const entryRouter = require("./entries");

router.use("/", otherRouter);
router.use("/employee", employeeController);
router.use("/customer", customerController);

router.use("/entry", entryRouter);

module.exports = router;
