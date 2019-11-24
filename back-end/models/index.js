const db = require("../config/db");

const Employee = db.import("./employee.js");
const Customer = db.import("./customer.js");
const Entry = db.import("./entries.js");
const Average = db.import("./average.js");
const Paycheck = db.import("./paycheck.js");

Customer.hasMany(Entry, { onDelete: "cascade" });

module.exports = {
  Employee,
  Customer,
  Entry,
  Average,
  Paycheck,
  db
};
