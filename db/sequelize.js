const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("hac_system", "pgadmin", "1234", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = sequelize;
