const express = require("express");

const Temperature = require("../models/temperatureModel");
const Humidity = require("../models/humidityModel");
const Light = require("../models/lightsModel");
const Gas = require("../models/gasModel");
const Motion = require("../models/motionModel");

const { getAllTemperatures } = require("../controllers/readingController");

const router = express.Router();
router.get("/temp", getAllTemperatures);

module.exports = router;
