const { DataTypes } = require("sequelize");
const sequelize = require("../database");


const Contact = sequelize.define(
  "Contact",
  {
      // Model attributes are defined here
      currentAddress: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        permanentAddress: {
          type: DataTypes.STRING,
          // allowNull defaults to true
        },
  },
  {
    tableName: "Contacts",

    // Other model options go here
  }
);

module.exports = Contact;


