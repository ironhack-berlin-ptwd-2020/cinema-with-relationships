
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const actorSchema = new Schema(
  {
    name: String
  }
);

module.exports = model('Actor', actorSchema);