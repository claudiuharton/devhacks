const Sequelize = require('sequelize')

const sequelize = new Sequelize("localhost" , "root" , "" , {
    dialect: "mysql",
    host: "localhost",
    define:{
        timestamps: true
    }
})

module.exports = sequelize