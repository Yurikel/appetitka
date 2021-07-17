const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  login: { 
    type: Number, 
    required: true
  },
  password: { 
    type: String, 
    required: true
  },
});

module.exports = mongoose.model("Admin", adminSchema);
