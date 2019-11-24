const { Employee, Cashpoint } = require("../models");

const init = {
  employees: async () => {
    const employees = await Employee.findAll({ raw: true });

    return employees;
  },
  cashpoints: async () => {
    const cashpoints = [];

    const cashpoint = await Cashpoint.findOne({ raw: true });
    for (let i = 0; i < cashpoint.total; i++) {
      cashpoints.push({
        employeeId: 0,
        status: 0,
        customers: [],
        number: i + 1,
        lastDeparture: null
      });
    }
    return cashpoints;
  },
  customersInShop: async () => {
    return [];
  },
  customersAtCashPoints: async () => {
    return [];
  }
};

module.exports = init;
