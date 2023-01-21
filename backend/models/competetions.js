const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Competetions = new Schema({
  title: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  needed: {
    type: Number,
    required: true,
  },
  members: {
    type: Array,
    required: false,
  },
});
module.exports = mongoose.model('Competetions', Competetions);