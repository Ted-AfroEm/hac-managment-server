const pool = require("../db/pool");

const getPeoples = (request, response) => {
  pool.query("SELECT * FROM people ORDER BY id ASC", (error, results) => {
    if (error) {
      response.status(500).json({ error: "Internal Server Error" });
      return;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = { getPeoples };
