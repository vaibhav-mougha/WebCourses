const express = require("express");
const { NextModel } = require("../Models/Next.model");

const nextRouter = express.Router();

nextRouter.use(express.json());

// Only for LOGGED in USERS

nextRouter.get("/", async (req, res) => {

  try {
    const data = await NextModel.find();
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

nextRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await NextModel.findById(id);
  res.send(data);
});

// Strictly for ADMIN only

nextRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newTopic = new NextModel(payload);
    await newTopic.save();
    res.send({ newTopic, message: "New Topic successfully Added" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

nextRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await NextModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The Redux Topic" });
  } catch {
    res.send("err");
  }
});

module.exports = {
  nextRouter,
};
