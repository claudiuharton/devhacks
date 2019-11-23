module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "customer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      //F1
      timeSpentShopping: DataTypes.BIGINT,
      //F2
      timeSpentAtQueue: DataTypes.BIGINT,
      //F3
      timeSpentAtCashier: DataTypes.BIGINT
    },
    {
      tableName: "customer"
    },
    {
      force: true,
      underscored: true
    }
  );
};
