module.exports = (sequelize, DataTypes) => {
  return sequelize.define("cashpoint", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    total: DataTypes.INTEGER
  });
};
