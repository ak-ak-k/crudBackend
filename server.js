const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://adityakirtane27:7V1EKjgtsZKsTN6w@cluster0.mx4oox8.mongodb.net/",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

module.exports = mongoose;
// adityakirtane27 7V1EKjgtsZKsTN6w
// mongodb+srv://adityakirtane27:7V1EKjgtsZKsTN6w@cluster0.mx4oox8.mongodb.net/
