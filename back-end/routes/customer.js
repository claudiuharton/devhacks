const customerController = require("../controllers").customer;
const express = require("express");
const router = express.Router();

router.post("/", customerController.addCustomer);

module.exports = router;
