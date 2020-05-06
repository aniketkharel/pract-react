const mongoose = require("mongoose");

const ActivityModel = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Activities", ActivityModel);
