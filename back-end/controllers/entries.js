const { Entry, Customer } = require("../models");

const controller = {
  enterStore: async (req, res) => {
    try {
      const currentDate = new Date();
      const customer = await Customer.findOne({
        where: { id: req.body.id },
        raw: true
      });

      const entry = await Entry.create({
        arrivedAt: currentDate,
        customerId: customer.id
      });

      const cust = {
        id: customer.id,
        //F1
        timeSpentShopping: customer.timeSpentShopping,
        //F2
        timeSpentAtQueue: customer.timeSpentAtQueue,
        //F3
        timeSpentAtCashier: customer.timeSpentAtCashier,
        //T1
        arrivedAt: entry.arrivedAt,
        //T2
        arrivedAtCheck: entry.arrivedAtCheck,
        //T3
        arrivedAtPay: entry.arrivedAtPay,
        //T4
        leftAt: entry.leftAt,
        //T2A
        arrivedAtCheckAprox: entry.arrivedAt + customer.timeSpentShopping,

        counter: 1
      };

      req.app.locals.customersInShop.push(cust);
      req.app.locals.customersInShop.sort(
        (a, b) => a.arrivedAtCheckAprox - b.arrivedAtCheckAprox
      );

      for (let i = 0; i < req.app.locals.customersInShop.length; i++) {
        let counter = req.app.locals.cashPoints.reduce((acc, curr) => {
          if (
            curr.status &&
            req.app.locals.customersInShop[i].arrivedAtCheckAprox -
              currentDate <
              curr.customers.reduce(
                (acc2, curr2) => curr2.timeSpentAtCashier + acc2,
                0
              )
          )
            return acc + 1;
          else return acc;
        }, 0);
        for (let j = 0; j < i; j++) {
          if (i != j) {
            if (
              req.app.locals.customersInShop[i].arrivedAtCheckAprox -
                currentDate >
              req.app.locals.customersInShop[j].timeSpentAtCashier
            ) {
              counter++;
            }
          }
          req.app.locals.customersInShop[i].counter = counter;
        }
      }

      let openCashPoints = req.app.locals.cashPoints.reduce((acc, curr) => {
        if (curr.status) return acc + 1;
        else acc;
      }, 0);

      const notifications = [];
      req.app.locals.customersInShop.map(item => {
        if (item.counter > openCashPoints)
          notifications.push({
            id: Math.random(),
            time: item.arrivedAtCheckAprox,
            necesity: item.counter - openCashPoints
          });
        openCashPoints + (item.counter - openCashPoints);
      });

      req.app.locals.notifications.push(...notifications);

      //   req.app.locals.customersInShop;

      res.status(201).send({ message: "Customer arrived" });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },

  checkpointArrival: async (req, res) => {
    try {
      const currentDate = new Date();
      const entry = await Entry.findOne({
        where: { customerId: req.body.id },
        order: ["id", "DESC"]
      });
      await entry.update({ ...entry, arrivedAtCheck: currentDate });

      const customer = req.app.locals.customersInShop.splice(
        req.app.locals.customersInShop.find(el => el.id === req.body.id),
        1
      );

      let indexOfBestCashPointValue;
      const bestCashPointValue = req.app.locals.cashPoints.reduce(
        (acc, curr, index) => {
          if (curr.status) {
            const total = curr.customers.reduce(
              (acc2, curr2) => curr2.timeSpentAtCashier + acc2,
              0
            );

            if (acc < total) {
              return acc;
            } else {
              indexOfBestCashPointValue = index;
              return total;
            }
          }
        }
      );

      req.app.locals.cashPoints[indexOfBestCashPointValue].customers.push(
        customer
      );

      res
        .status(200)
        .send({ message: `Customer checkpoint arrived at: ${currentDate}` });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },

  cashPointArrival: async (req, res) => {
    try {
      const currentDate = new Date();
      const entry = await Entry.findOne({
        where: { customerId: req.body.id },
        order: ["id", "DESC"]
      });
      await entry.update({ ...entry, arrivedAtPay: currentDate });
      res
        .status(200)
        .send({ message: `Customer cashpoint arrived at: ${currentDate}` });
    } catch (e) {
      console.error(e);
      res.status(500).send({ message: "Server Error" });
    }
  },

  departure: async (req, res) => {
    try {
      const currentDate = new Date();
      const entry = await Entry.findOne({
        where: { customerId: req.body.id },
        order: [["id", "DESC"]]
      });
      await entry.update({ ...entry, leftAt: currentDate });

      let indexOfCustomer;

      let indexOfTargetedCashPoint = req.app.locals.cashPoints.findIndex(it => {
        indexOfCustomer = it.customers.findIndex(it2 => it2.id === req.body.id);
        return indexOfCustomer;
      });

      req.app.locals.cashPoints[indexOfTargetedCashPoint].customers.splice(
        indexOfCustomer,
        1
      );

      if (
        req.app.locals.cashPoints[indexOfTargetedCashPoint].customers.length ===
        0
      ) {
        req.app.locals.cashPoints[
          indexOfTargetedCashPoint
        ].lastDeparture = currentDate;
      }

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
      res.status(200).send({ message: `Customer left at: ${currentDate}` });
      // let timeSpentShopping =
    } catch (e) {
      console.log(e);
      res.status(500).send({ message: "Server error" });
    }
  }
};

module.exports = controller;
