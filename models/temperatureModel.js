const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const temperatureSchema = new Schema(
  {
    sensor: {
      type: String,
      // required: true,
    },
    temperature: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Temperature", temperatureSchema);
