const mongoose = require("mongoose");

const expressSchema = mongoose.Schema({
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: String, required: true },
  url: {  type: String, required: true }
});

const ExpressModel = mongoose.model("express", expressSchema);

module.exports = {
    ExpressModel,
};
