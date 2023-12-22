const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONOGDB_URI || "mongodb://127.0.0.1:27017/NSQL")
  .then(() => console.log("Mongoose sucesfully connected"))
  .catch((err) => console.log(err));

module.exports = mongoose.connection;