const express = require("express");
const connect = require("./db/connect");
const seedDatabase = require("./db/seeder")
const path = require('path')
const coonect = require("./db/connect");
const mainRote = require("./routes/main");
const adminRote = require("./routes/admin");
const agentRoute = require("./routes/agent")




const app = express();
connect();
seedDatabase();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", mainRote);
app.use("/admin",adminRote);
app.use("/agent", agentRoute);


module.exports = app
