const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("./server");
const routes = require("./routes/emp");

const app = express();

app.use(bodyParser.json());

app.use(cors({ origin: "*" }));

app.listen(3000, () => {
  console.log("server started at 3000");
});

app.use("/employees", routes);
