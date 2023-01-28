const express = require("express");
const { ReactModel } = require("../Models/React.model");

const reactRouter = express.Router();

reactRouter.use(express.json());

// Only for LOGGED in USERS

reactRouter.get("/", async (req, res) => {

  try {
    const data = await ReactModel.find();
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

reactRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await ReactModel.findById(id);
  res.send(data);
});

// Strictly for ADMIN only

reactRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newTopic = new ReactModel(payload);
    await newTopic.save();
    res.send({ newTopic, message: "New Topic successfully Added" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

reactRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ReactModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The Redux Topic" });
  } catch {
    res.send("err");
  }
});

module.exports = {
  reactRouter,
};
