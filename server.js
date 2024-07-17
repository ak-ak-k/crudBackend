const mongoose = require("mongoose");
mongoose
  .connect("mongodb://0.0.0.0:27017/empCrud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connedted");
  })
  .catch((err) => {
    console.log("db was not connected");
  });
module.exports = mongoose;
