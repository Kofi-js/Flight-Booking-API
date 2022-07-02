const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FlightSchema = new Schema(
  {
    title: { type: String, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Flight = mongoose.model("flight", FlightSchema);

module.exports = Flight;
