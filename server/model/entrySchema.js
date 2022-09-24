const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    departure: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    aircraft: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    secondP: {
      type: String,
    },
    thirdP: {
      type: String,
    },
    remarks: {
      type: String,
    },
  },

  { timestamps: true }
);

const Entry = mongoose.model("Entry", entrySchema);
module.exports = Entry;
