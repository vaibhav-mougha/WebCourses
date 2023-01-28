const mongoose = require("mongoose");

const nodeSchema = mongoose.Schema({
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: String, required: true },
  url: {  type: String, required: true }
});

const NodeModel = mongoose.model("node", nodeSchema);

module.exports = {
    NodeModel,
};
