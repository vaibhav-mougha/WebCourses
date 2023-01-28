require("dotenv").config();
const PORT = process.env.port;

const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./Configs/db");
const {userRouter}=require("./Routes/userRouter")
const { reduxRouter } = require("./Routes/Redux.route");
const { reactRouter } = require("./Routes/React.route");
const { nextRouter } = require("./Routes/Next.route");
const { expressRouter } = require("./Routes/Express.route");
const { nodeRouter } = require("./Routes/Node.route");
const { mongoRouter } = require("./Routes/Mongo.route");

// Middlewares... 
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/user", userRouter)

//Redux Router
app.use("/redux", reduxRouter);
//React Router
app.use("/react", reactRouter);
//Next Router
app.use("/next",nextRouter)
//Express Router
app.use("/express",expressRouter)
//Node Router
app.use("/node",nodeRouter)
//Mongo Router
app.use("/mongo",mongoRouter)

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
