const express = require("express");
const { getPeoples } = require("../controllers/peopleController");

const router = express.Router();

router.get("/peoples", getPeoples);

module.exports = router;
