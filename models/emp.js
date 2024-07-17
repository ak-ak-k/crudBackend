const mongoose = require("mongoose");

const Employees = mongoose.model("Employees", {
  name: { type: String },
  position: { type: String },
  dept: { type: String },
});

module.exports = Employees;
