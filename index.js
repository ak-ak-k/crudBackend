const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./server");
const routes = require("./routes/emp");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.listen(3000, () => {
  console.log("server started at 3000");
});

app.use("/employees", routes);
