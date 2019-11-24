const { Entry, Customer } = require("../models");

const controller = {
  enterStore: async (req, res) => {
    try {
      const customer = await Customer.findOne({
        where: { id: req.body.id },
        raw: true
      });

      const entry = await Entry.create({
        arrivedAt: new Date(),
        customerId: customer.id
      });

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
      let timeSpentShopping = entry.arrivedAtCheck - entry.arrivedAt; //f1
      let timeSpentAtQueue = entry.arrivedAtPay - entry.arrivedAtCheck; //f2
      let timeSpentAtCashier = entry.leftAt - entry.arrivedAtPay; //f3
      if (!customer.timeSpentShopping) {
        await customer.update({
          ...customer,
          timeSpentShopping: timeSpentShopping,
          timeSpentAtQueue: timeSpentAtQueue,
          timeSpentAtCashier: timeSpentAtCashier,
          counter: 1
        });
        console.log("Updated customer info");
      } else {
        let counter = customer.counter;
        await customer.update({
          ...customer,

          timeSpentShopping:
            (customer.timeSpentShopping * (counter / (counter + 1)) +
              timeSpentShopping * (counter + 1)) /
            (counter + 1),
          timeSpentAtQueue:
            (customer.timeSpentAtQueue * (counter / (counter + 1)) +
              timeSpentAtQueue * (counter + 1)) /
            (counter + 1),
          timeSpentAtCashier:
            (customer.timeSpentAtCashier * (counter / (counter + 1)) +
              timeSpentAtCashier * (counter + 1)) /
            (counter + 1),
          counter: counter++
        });
        console.log("------------HERE: " + customer.timeSpentShopping);
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
