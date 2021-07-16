const express = require("express");
const connect = require("./db/connect");
const seedDatabase = require("./db/seeder")
const path = require('path')


const app = express();
connect();
seedDatabase();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = app
