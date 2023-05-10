const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const lightSchema = new Schema(
  {
    sensor: {
      type: String,
      // required: true,
    },
    light: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Lights", lightSchema);
