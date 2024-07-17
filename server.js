const mongoose = require("mongoose");

mongoose
  .connect("mongodb://0.0.0.0:27017/empCrud", {})
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

module.exports = mongoose;
