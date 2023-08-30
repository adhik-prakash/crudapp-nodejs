const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define(
  "User",
  {
    //modelname should be singular
    // Model attributes are defined here
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      defaultValue: "Adhikari",
      // allowNull defaults to true
    },
  },
  {
    // Other model options go here
    tableName: "users"
    //table name must be plural
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;
