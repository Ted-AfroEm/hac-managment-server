const express = require("express");
const { getPeoples, addPerson } = require("../controllers/peopleController");

const router = express.Router();

router.get("/peoples", getPeoples);
router.post("/person", addPerson);

module.exports = router;
