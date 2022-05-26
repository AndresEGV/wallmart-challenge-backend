const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shipSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  model: {
    type: String,
    required: true,
    trim: true,
  },
  manufacter: {
    type: String,
    required: true,
    trim: true,
  },
  passangers: {
    type: Number,
    required: true,
  },
  starship_class: {
    type: String,
    required: true,
    trim: true,
  },
  cargo_capacity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Ship", shipSchema);
