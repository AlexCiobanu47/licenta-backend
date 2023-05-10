const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const motionModel = new Schema(
  {
    sensor: {
      type: String,
      // required: true,
    },
    motion: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Motion", motionModel);
