const express = require("express");
const { NodeModel } = require("../Models/Node.model");

const nodeRouter = express.Router();

nodeRouter.use(express.json());

// Only for LOGGED in USERS

nodeRouter.get("/", async (req, res) => {

  try {
    const data = await NodeModel.find();
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

nodeRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await NodeModel.findById(id);
  res.send(data);
});

// Strictly for ADMIN only

nodeRouter.post("/create", async (req, res) => {
  const payload = req.body;
  try {
    const newTopic = new NodeModel(payload);
    await newTopic.save();
    res.send({ newTopic, message: "New Topic successfully Added" });
  } catch (err) {
    console.log("err :>> ", err);
    res.send({ msg: err });
  }
});

nodeRouter.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await NodeModel.findByIdAndDelete({ _id: id });
    res.json({ status: 200, message: "Deleted The Redux Topic" });
  } catch {
    res.send("err");
  }
});

module.exports = {
  nodeRouter,
};
