module.exports = (sequelize, DataTypes) => {
  return sequelize.define("employee", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    status: DataTypes.INTEGER, // 0(not on paycheck), 1(at paycheck), 2(will be at paycheck)
    cashPointNumber: DataTypes.INTEGER
  });
};
