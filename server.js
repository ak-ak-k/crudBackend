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
// const mongoose = require("mongoose");p  adityakirtane27 7V1EKjgtsZKsTN6w
// mongodb+srv://adityakirtane27:7V1EKjgtsZKsTN6w@cluster0.mx4oox8.mongodb.net/
// const connectWithRetry = () => {
//   console.log("MongoDB connection with retry");
//   mongoose
//     .connect(
//       "mongodb+srv://doadmin:523fQKF96aZ0n1c7@db-mongodb-blr1-55155-1cb7a79a.mongo.ondigitalocean.com/admin?tls=true&authSource=admin&replicaSet=db-mongodb-blr1-55155"
//       // {
//       //   useNewUrlParser: true,
//       //   useUnifiedTopology: true,
//       // }
//     )
//     .then(() => {
//       console.log("Connected to MongoDB");
//     })
//     .catch((err) => {
//       console.error(
//         "Error connecting to MongoDB, retrying in 5 seconds...",
//         err
//       );
//       setTimeout(connectWithRetry, 5000);
//     });
// };

// connectWithRetry();

// module.exports = mongoose;
