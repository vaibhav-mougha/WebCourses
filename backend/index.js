require("dotenv").config();
const PORT = process.env.port;

const express = require("express");
const app = express();
const cors = require("cors");
const { ReactRouter}= require("./Routes/ReactRouter")
const { connection } = require("./Configs/db");
const {userRouter}=require("./Routes/userRouter")


// Middlewares... 
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/product", ReactRouter)
app.use("/user", userRouter)


app.get("/", (req, res) => {
  res.send("Welcome Home Page");
});

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server is running at PORT : ${PORT}`);
});
