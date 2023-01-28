const express = require("express");
const { ReduxModel } = require("../Models/Redux.model");

const reduxRouter = express.Router();

reduxRouter.use(express.json());

// Only for LOGGED in USERS

reduxRouter.get("/", async (req, res) => {

  try {
    const data = await ReduxModel.find();
        if(!data){
            return req.send("There is no topic added yet.");
        }else {
            res.send(data);
        }
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ err: err });
  }
});

reduxRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await ReduxModel.findById(id);
  res.send(data);
});

// Strictly for ADMIN only

reduxRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newTopic = new ReduxModel(payload);
    await newTopic.save();
    res.send({ newTopic, message: "New Topic successfully Added" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

reduxRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ReduxModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The Redux Topic" });
  } catch {
    res.send("err");
  }
});

module.exports = {
  reduxRouter,
};
