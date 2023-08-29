const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const User = sequelize.define(
  "User",
  {
    //modelname should be singular
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      defaultValue: "Adhikari",
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName: "users",
    tableName: "contacts"
    //table name must be plural
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;
