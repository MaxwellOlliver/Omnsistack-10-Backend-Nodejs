const mongoose = require('mongoose');

const PointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required:  true
  },
  coordinates: {
    //Longitude first
    type: [Number],
    required: true,
  }
});

module.exports = PointSchema;