const { Employee } = require("../models");
const express = require("express");
const router = express.Router();

const employeeController = {
  addEmployee: async (req, res) => {
    const employee = {
      name: req.body.name,
      status: 0
    };

    try {
      const newEmployee = await Employee.create(employee);
      res.status(201).send({
        message: `Employee added!`
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error adding employee!"
      });
    }
  }
};

module.exports = employeeController;
