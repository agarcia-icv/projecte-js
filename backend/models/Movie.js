const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  rating: {
    type: Number,
    min: 0,
    max: 10,
  },

  watched: {
    type: Boolean,
    default: false,
  },

  releaseDate: {
    type: Date,
  },

  genres: {
    type: [String],
    required: true,
  }
});

module.exports = mongoose.model("Movie", movieSchema);