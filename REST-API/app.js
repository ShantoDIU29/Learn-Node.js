const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/users.route");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Home Route
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// User Route
app.use("/users", userRouter);

// Route Not Found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Server Error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Something broken",
  });
});

module.exports = app;