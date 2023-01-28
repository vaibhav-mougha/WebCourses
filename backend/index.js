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


// Socket.io
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);


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

// Socket.io
// const http = require('http').createServer(app);

//Attached http server to the socket.io
// const io = require('socket.io')(http);

//Create a new connection
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
  });

  socket.on("send_message", (data) => {
    // console.log(data)
    // socket.to(data.room).emit("receive_message", data);
    socket.broadcast.emit("receive_message", data);
  });
});

server.listen(3001, () => {
  console.log("SERVER IS RUNNING");
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
