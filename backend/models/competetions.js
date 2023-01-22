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
  authorMail: {
    type: String,
    required: true,
  },
  membersNeeded: {
    type: Number,
    required: true,
  },
  requests: {
    type: Array,
    required: false,
  },
  members: {
    type: Array,
    required: false,
  },
}, {timestamps: true});
module.exports = mongoose.model('Competetions', Competetions);