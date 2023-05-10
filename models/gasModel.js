const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const gasSchema = new Schema(
  {
    sensor: {
      type: String,
      // required: true,
    },
    gasConcentration: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Gas", gasSchema);
