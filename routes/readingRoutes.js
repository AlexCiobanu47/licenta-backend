const express = require("express");

// const Temperature = require("../models/temperatureModel");
// const Humidity = require("../models/humidityModel");
// const Light = require("../models/lightsModel");
// const Gas = require("../models/gasModel");
// const Motion = require("../models/motionModel");

const {
  getAllTemperatures,
  getLatestTemperature,
  getAllHumidities,
  getLatestHumidity,
  getAllLights,
  getLatestLight,
  getAllGasConcentrations,
  getLatestGasConcentration,
  getAllMotionDetections,
  getLatestMotion,
} = require("../controllers/readingController");

const router = express.Router();
router.get("/temp", getAllTemperatures);
router.get("/temp/latest", getLatestTemperature);
router.get("/hum", getAllHumidities);
router.get("/hum/latest", getLatestHumidity);
router.get("/light", getAllLights);
router.get("/light/latest", getLatestLight);
router.get("/gas", getAllGasConcentrations);
router.get("/gas/latest", getLatestGasConcentration);
router.get("/motion", getAllMotionDetections);
router.get("/motion/latest", getLatestMotion);

module.exports = router;
