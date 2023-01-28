const express = require("express");
const { MongoModel } = require("../Models/Mongo.model");

const mongoRouter = express.Router();

mongoRouter.use(express.json());

// Only for LOGGED in USERS

mongoRouter.get("/", async (req, res) => {

  try {
    const data = await MongoModel.find();
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

mongoRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await MongoModel.findById(id);
  res.send(data);
});

// Strictly for ADMIN only

mongoRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newTopic = new MongoModel(payload);
    await newTopic.save();
    res.send({ newTopic, message: "New Topic successfully Added" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

mongoRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await MongoModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The Redux Topic" });
  } catch {
    res.send("err");
  }
});

module.exports = {
  mongoRouter,
};
