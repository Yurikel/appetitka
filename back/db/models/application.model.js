const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  isready: false,
  goods: [
    {
      good: {
        type: Good.Types.ObjectId,
        ref: "Good",
      },
      amount: Number,
    },
  ],
  buyer: {
    type: Agent.Types.ObjectId,
    ref: "Agent",
  },
  regnumber: {
    type: Number,
    default: 0,
  },
});

applicationSchema.statics.findLatestRegNumber = function () {
  return this.find().sort({ regnumber: 1 }).limit(1);
};

module.exports = mongoose.model("Admin", adminSchema);
