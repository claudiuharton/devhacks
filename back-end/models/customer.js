module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "customer",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      //F1
      timeSpentShopping: DataTypes.BIGINT,
      //F2
      timeSpentAtQueue: DataTypes.BIGINT,
      //F3
      timeSpentAtCashier: DataTypes.BIGINT,
      counter: DataTypes.INTEGER
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
