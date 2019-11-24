const { Customer } = require("../models");
const express = require("express");
const router = express.Router();

const customerController = {
  addCustomer: async (req, res) => {
    const customer = {
      name: req.body.name,
      timeSpentShopping: 0,
      timeSpentAtQueue: 0,
      timeSpentAtCashier: 0,
      counter: 0
    };

    try {
      const newCustomer = await Customer.create(customer);
      res.status(201).send({
        message: `Customer added!`
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: "Error adding customer!"
      });
    }
  }
};

module.exports = customerController;
