const mongoose = require("mongoose");

const mongoSchema = mongoose.Schema({
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: String, required: true },
  url: {  type: String, required: true }
});

const MongoModel = mongoose.model("mongo", mongoSchema);

module.exports = {
    MongoModel,
};
