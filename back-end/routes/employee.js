const employeeController = require('../controllers').employee
const express = require("express");
const router = express.Router();

router.post('/' , employeeController.addEmployee)

module.exports = router;