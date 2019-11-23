const employeeDB = require('../models/employee')
const express = require('express')
const router = express.Router()

const employeeController = {
    
    addEmployee: async(req , res) => {
        const employee = {
            status:req.body.status,
            cashPointNumber:req.body.cashPointNumber,
            arrivedAt: req.body.arrivedAt 
        }

    try {
        const newEmployee = await employeeDB.create(employee)
        res.status(201).send({
            message: `Employee added!`
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: 'Error adding employee!'
            })
        }
    }
}