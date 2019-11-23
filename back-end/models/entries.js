module.exports =
  (sequelize,
  DataTypes => {
    return sequelize.define("entries", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },

      arrivedAt: {
        //T1
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("arrivedAt")).format(
            "DD/MM/YYYY h:mm:ss"
          );
        }
      },

      arrivedAtCheck: {
        //T2
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("arrivedAtCheck")).format(
            "DD/MM/YYYY h:mm:ss"
          );
        }
      },

      arrivedAtPay: {
        //T3
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("arrivedAtPay")).format(
            "DD/MM/YYYY h:mm:ss"
          );
        }
      },

      leftAt: {
        //T4
        type: DataTypes.DATE,
        get() {
          return moment(this.getDataValue("leftAt")).format(
            "DD/MM/YYYY h:mm:ss"
          );
        }
      }
    });
  });
