const mongoose = require("mongoose");

const applicationSchema = mongoose.Schema({
  isready: false,
  goods: [
    {
      good: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Good",
      },
      amount: Number,
    },
  ],
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Agent",
  },
  regnumber: {
    type: Number,
    default: 0,
  },
});


module.exports = mongoose.model("Applications", applicationSchema);
