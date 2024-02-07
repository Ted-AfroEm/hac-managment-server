const { Pool } = require("pg");

const pool = new Pool({
  user: "pgadmin",
  host: "localhost",
  database: "hac_system",
  password: "1234",
  port: 5432,
});

module.exports = pool;
