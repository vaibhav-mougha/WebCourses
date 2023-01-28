const express = require("express");
const { ExpressModel } = require("../Models/Express.model");

const expressRouter = express.Router();

expressRouter.use(express.json());

// Only for LOGGED in USERS

expressRouter.get("/", async (req, res) => {

  try {
    const data = await ExpressModel.find();
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

expressRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await ExpressModel.findById(id);
  res.send(data);
});

// Strictly for ADMIN only

expressRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newTopic = new ExpressModel(payload);
    await newTopic.save();
    res.send({ newTopic, message: "New Topic successfully Added" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

expressRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await ExpressModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The Redux Topic" });
  } catch {
    res.send("err");
  }
});

module.exports = {
  expressRouter,
};
