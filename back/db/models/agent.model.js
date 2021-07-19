const mongoose = require("mongoose");

const agentSchema = mongoose.Schema({
  title: { // проверка на 
    type: String, 
    required: true
  },
  itn: { // ИНН
    type: String, 
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
  
});

module.exports = mongoose.model("Agent", agentSchema);
