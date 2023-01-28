const mongoose = require("mongoose");

const reduxSchema = mongoose.Schema({
  heading: { type: String, required: true },
  desc: { type: String, required: true },
  duration: { type: String, required: true },
  url: {  type: String, required: true }
});

const ReduxModel = mongoose.model("redux", reduxSchema);

module.exports = {
    ReduxModel,
};
