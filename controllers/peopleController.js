const People = require("../models/People");
const PersonDTO = require("../dto/PersonDTO");
const { formatResponse } = require("../utils/responseUtils");

const getPeoples = async (req, res) => {
  try {
    const peoples = await People.findAll({ order: [["id", "ASC"]] });
    res
      .status(200)
      .json(formatResponse(peoples, "People retrived successfully", 200));
  } catch (error) {
    console.error(error);
    res.status(500).json(formatResponse(null, "Internal Server Error", 500));
  }
};

const addPerson = async (req, res) => {
  try {
    // Check if the request body is empty
    if (!req.body) {
      return res
        .status(400)
        .json(formatResponse(null, "Request body is empty", 400));
    }

    //Create DTO instance
    const personDTO = new PersonDTO(req.body);

    //Validate DTO
    const missingFields = personDTO.validate();
    if (missingFields) {
      return res
        .status(400)
        .json(
          formatResponse(
            null,
            `Missing fields: ${missingFields.join(", ")}`,
            400
          )
        );
    }

    // Check if a person with the same phone number already exists
    const existingPerson = await People.findOne({
      where: { phoneNumber: personDTO.phoneNumber },
    });
    if (existingPerson) {
      return res
        .status(400)
        .json(
          formatResponse(
            null,
            "A person with the same phone number already exists",
            400
          )
        );
    }
    // Default status
    personDTO.status = "pending";

    const newPerson = await People.create(personDTO);
    res
      .status(201)
      .json(formatResponse(newPerson, "Person added successfully", 201));
  } catch (err) {
    console.error(err);
    res.status(500).json(formatResponse(null, "Internal Server Error", 500));
  }
};

module.exports = { getPeoples, addPerson };
