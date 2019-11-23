const { Entry, Customer } = require("../models");

const controller = {
  enterStore: async (req, res) => {
    try {
      const customer = await Customer.findOne({
        where: { id: req.body.id },
        raw: true
      });

      await Entry.create({ arrivedAt: new Date(), customerId: customer.id });

      res.status(201).send({ message: "Customer arrived" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },

  checkpointArrival: async (req, res) => {
    try {
      const entry = await Entry.findOne({
        where: { customerId: req.body.id },
        order: [["id", "DESC"]]
      });
      console.log(entry);
      await entry.update({ ...entry, arrivedAtCheck: new Date() });
      res
        .status(200)
        .send({ message: `Customer checkpoint arrived at: ${new Date()}` });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },

  cashPointArrival: async (req, res) => {
    try {
      const entry = await Entry.findOne({
        where: { customerId: req.body.id },
        order: [["id", "DESC"]]
      });
      console.log(entry);
      await entry.update({ ...entry, arrivedAtPay: new Date() });
      res
        .status(200)
        .send({ message: `Customer cashpoint arrived at: ${new Date()}` });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },

  departure: async (req, res) => {
    try {
      const entry = await await Entry.findOne({
        where: { customerId: req.body.id },
        order: [["id", "DESC"]]
      });
      await entry.update({ ...entry, leftAt: new Date() });
      res.status(200).send({ message: `Customer left at: ${new Date()}` });
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Server error" });
    }
  }
};

module.exports = controller;
