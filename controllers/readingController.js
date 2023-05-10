const Temperature = require("../models/temperatureModel");
const Humidity = require("../models/humidityModel");
const Light = require("../models/lightsModel");
const Gas = require("../models/gasModel");
const Motion = require("../models/motionModel");

const mongoose = require("mongoose");

//GET temperatures
const getAllTemperatures = async (req, res) => {
  const temperatures = await Temperature.find({}).sort({ createdAt: -1 });
  res.status(200).json(temperatures);
};

module.exports = { getAllTemperatures };
