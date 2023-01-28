const mongoose = require("mongoose");

const nextSchema = mongoose.Schema({
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: String, required: true },
  url: {  type: String, required: true }
});

const NextModel = mongoose.model("next", nextSchema);

module.exports = {
    NextModel,
};
