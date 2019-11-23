module.exports = (sequelize, DataTypes) => {
    return sequelize.define('employee' , {
        id: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        status: DataTypes.INTEGER, // 0(not on paycheck), 1(at paycheck), 2(will be at paycheck)
        cashPointNumber: DataTypes.INTEGER,
        arrivedAt: {
            type: DataTypes.DATE,
            get(){
                return moment(this.getDataValue('arrivedAt')).format('DD/MM/YY h:mm:ss')
        },
    }

    })
}