const mongoose = require("mongoose");

const goodSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Good", goodSchema);
