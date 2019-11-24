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
      const entry = await Entry.findOne({
        where: { customerId: req.body.id },
        order: [["id", "DESC"]]
      });
      await entry.update({ ...entry, leftAt: new Date() });
      res.status(200).send({ message: `Customer left at: ${new Date()}` });
      const customer = await Customer.findOne({
        where: { id: req.body.id }
      });
      let timeSpentShopping = entry.arrivedAtCheck - entry.arrivedAt;
      let timeSpentAtQueue = entry.arrivedAtPay - entry.arrivedAtCheck;
      let timeSpentAtCashier = entry.leftAt - entry.arrivedAtPay;
      if (!customer.timeSpentShopping) {
        await customer.update({
          ...customer,
          timeSpentShopping: timeSpentShopping,
          timeSpentAtQueue: timeSpentAtQueue,
          timeSpentAtCashier: timeSpentAtCashier
        });
        console.log("Updated customer info");
      }
      console.log(timeSpentShopping);
      // let timeSpentShopping =
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Server error" });
    }
  }
};

module.exports = controller;
