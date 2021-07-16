const express = require("express");
const connect = require("./db/connect");
const coonect = require("./db/connect")


const app = express();
connect();
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


module.exports = app