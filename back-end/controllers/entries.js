const { Entry, Customer } = require("../models");

const controller = {
  enterStore: async (req, res) => {
    try {
      const customer = await Customer.findOne({
        where: { id: req.id },
        raw: true
      });

      await Entry.create({ arrivedAt: new Date(), customerId: customer.id });

      res.status(201).send({ message: "Customer arrived" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  }
};

module.exports = controller;
