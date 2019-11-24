module.exports = (sequelize, DataTypes) => {
  return sequelize.define("paycheck", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    paycheckNumber: DataTypes.INTEGER
  });
};
