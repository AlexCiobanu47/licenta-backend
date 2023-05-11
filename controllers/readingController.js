const Temperature = require("../models/temperatureModel");
const Humidity = require("../models/humidityModel");
const Light = require("../models/lightsModel");
const Gas = require("../models/gasModel");
const Motion = require("../models/motionModel");

// const mongoose = require("mongoose");

//GET temperatures
const getAllTemperatures = async (req, res) => {
  const temperatures = await Temperature.find({}).sort({ createdAt: -1 });
  res.status(200).json(temperatures);
};
//GET latest temperature
const getLatestTemperature = async (req, res) => {
  const temperature = await Temperature.find({})
    .limit(1)
    .sort({ createdAt: -1 });
  res.status(200).json(temperature);
};
const getAllHumidities = async (req, res) => {
  const humidities = await Humidity.find({}).sort({ createdAt: -1 });
  res.status(200).json(humidities);
};
const getLatestHumidity = async (req, res) => {
  const humidity = await Humidity.find({}).limit(1).sort({ createdAt: -1 });
  res.status(200).json(humidity);
};
const getAllLights = async (req, res) => {
  const lights = await Light.find({}).sort({ createdAt: -1 });
  res.status(200).json(lights);
};
const getLatestLight = async (req, res) => {
  const light = await Temperature.find({}).limit(1).sort({ createdAt: -1 });
  res.status(200).json(light);
};
const getAllGasConcentrations = async (req, res) => {
  const concentrations = await Gas.find({}).sort({ createdAt: -1 });
  res.status(200).json(concentrations);
};
const getLatestGasConcentration = async (req, res) => {
  const gasConcentation = await Gas.find({}).limit(1).sort({ createdAt: -1 });
  res.status(200).json(gasConcentation);
};
const getAllMotionDetections = async (req, res) => {
  const detections = await Motion.find({}).sort({ createdAt: -1 });
  res.status(200).json(detections);
};
const getLatestMotion = async (req, res) => {
  const detection = await Motion.find({}).limit(1).sort({ createdAt: -1 });
  res.status(200).json(detection);
};
module.exports = {
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
};
