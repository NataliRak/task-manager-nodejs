const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

app.use(express.json());
app.use(express.static("./public"));
app.use("/api/v1/tasks", tasks);

port = 3000;
const start = async () => {
  try {
    await connectDB(
      "mongodb+srv://rak:task-manager-13@cluster0.m1vdqh5.mongodb.net/?retryWrites=true&w=majority"
    );
    app.listen(port, console.log(`server has been started on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};
start();
