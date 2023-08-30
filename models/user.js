const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = sequelize.define(
  "User",
  {
    //modelname should be singular
    // Model attributes are defined here

    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      // defaultValue: "Adhikari",
      // allowNull defaults to true
    },
  },
  
  {
    // Other model options go here
    tableName: "Users"
    //table name must be plural
  },

);


// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

module.exports = User;
