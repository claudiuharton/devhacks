module.exports = (sequelize, DataTypes) => {
  return sequelize.define("average", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    average: DataTypes.FLOAT,
    day: DataTypes.DATE
  });
};
