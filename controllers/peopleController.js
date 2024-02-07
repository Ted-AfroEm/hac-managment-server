const People = require("../models/People");

const getPeoples = async (request, response) => {
  try {
    const peoples = await People.findAll({ order: [["id", "ASC"]] });
    response.status(200).json(peoples);
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getPeoples };
