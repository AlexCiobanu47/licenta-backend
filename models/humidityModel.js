const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const humiditySchema = new Schema(
  {
    sensor: {
      type: String,
      // required: true,
    },
    humidity: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Humidity", humiditySchema);
