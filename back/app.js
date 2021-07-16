const express = require("express");
const connect = require("./db/connect");
const path = require('path')
const mainRote = require("./routes/main");
const adminRote = require("./routes/admin");
const agentRoute = require("./routes/agent");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const session = require('express-session')
const FileStore = require('session-file-store')(session)



const app = express();
connect();
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  store: new FileStore(),
  key: 'user',
  secret: 'anything',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 100 * 60 * 1000,
    httpOnly: false,
  }
}))

app.use("/", mainRote);
app.use("/admin",adminRote);
app.use("/agent", agentRoute);


module.exports = app
