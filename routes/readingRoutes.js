const express = require("express");

const Temperature = require("../models/temperatureModel");
const Humidity = require("../models/humidityModel");
const Light = require("../models/lightsModel");
const Gas = require("../models/gasModel");
const Motion = require("../models/motionModel");

const {
  getAllTemperatures,
  getAllHumidities,
  getAllLights,
  getAllGasConcentrations,
  getAllMotionDetections,
} = require("../controllers/readingController");

const router = express.Router();
router.get("/temp", getAllTemperatures);
router.get("/hum", getAllHumidities);
router.get("/light", getAllLights);
router.get("/gas", getAllGasConcentrations);
router.get("/motion", getAllMotionDetections);

module.exports = router;
