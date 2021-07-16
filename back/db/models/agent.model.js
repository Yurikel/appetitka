const mongoose = require("mongoose");

const agentSchema = mongoose.Schema({
  title: { // проверка на 
    type: String, 
    required: true
  },
  itn: { // ИНН
    type: Number, 
    required: true
  },
  
});

module.exports = mongoose.model("Agent", agentSchema);
