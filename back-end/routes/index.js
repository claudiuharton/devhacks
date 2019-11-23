const express = require("express");
const router = express.Router();
const otherRouter = require("./other");

const entryRouter = require("./entries");

router.use("/", otherRouter);

router.use("/entry", entryRouter);

module.exports = router;
