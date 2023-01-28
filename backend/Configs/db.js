require("dotenv").config();
const URL = process.env.MongoURl;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connection = mongoose.connect(URL);

module.exports = {
  connection,
};
