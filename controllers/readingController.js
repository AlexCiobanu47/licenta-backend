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
const getAllHumidities = async (req, res) => {
  const humidities = await Humidity.find({}).sort({ createdAt: -1 });
  res.status(200).json(humidities);
};
const getAllLights = async (req, res) => {
  const lights = await Light.find({}).sort({ createdAt: -1 });
  res.status(200).json(lights);
};
const getAllGasConcentrations = async (req, res) => {
  const concentrations = await Gas.find({}).sort({ createdAt: -1 });
  res.status(200).json(concentrations);
};
const getAllMotionDetections = async (req, res) => {
  const detections = await Motion.find({}).sort({ createdAt: -1 });
  res.status(200).json(detections);
};
module.exports = {
  getAllTemperatures,
  getAllHumidities,
  getAllLights,
  getAllGasConcentrations,
  getAllMotionDetections,
};
