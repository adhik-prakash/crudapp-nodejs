require('dotenv').config()
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME
    , process.env.DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  // use of connection pool
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

try {

  // method used to test database connection
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
