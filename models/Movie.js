
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const movieSchema = new Schema(
  {
    title: String,
    director: String,
    stars: [String],
    image:
      String,
    description:
      String,
    showtimes: [String],
    actors: [{ type: mongoose.Schema.ObjectId, ref: 'Actor' }]
  },
  {
    timestamps: true
  }
);

module.exports = model('Movie', movieSchema);