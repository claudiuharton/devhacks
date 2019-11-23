const db = require('../config').db

const Employee = db.import('./employee.js')
const Customer = db.import('./customer.js')


module.exports = {
    Employee,
    Customer,
    connection:db
}