const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Contact = sequelize.define(
  "Contact",
  {
    // Model attributes are defined here
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    tableName: "contacts"

    
    // Other model options go here
  }
);

module.exports = Contact

