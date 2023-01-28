const mongoose = require("mongoose");

const reactSchema = mongoose.Schema({
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: String, required: true },
  url: {  type: String, required: true }
});

const ReactModel = mongoose.model("react", reactSchema);

module.exports = {
    ReactModel,
};
