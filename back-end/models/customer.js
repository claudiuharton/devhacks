module.exports = (sequelize , DataTypes) => {
    return sequelize.define('customer', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },

        //F1
        timeSpentShopping: DataTypes.LONG,
        //F2
        timeSpentAtQueue: DataTypes.LONG,
        //F3
        timeSpentAtCashier: DataTypes.LONG,
        
    },
    {
        tableName: 'customer'
    },
    {
        force:true,
        underscored:true
    })
}