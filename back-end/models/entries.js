module.exports = (sequelize, DataTypes) => {
  return sequelize.define("entry", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    //T1
    arrivedAt: DataTypes.DATE,

    //T2
    arrivedAtCheck: DataTypes.DATE,
    //T3
    arrivedAtPay: DataTypes.DATE,
    //T4
    leftAt: DataTypes.DATE
  });
};
