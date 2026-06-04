const express = require('express');
const app = express();

app.use(express.json());

// GET
app.get("/", (req, res) => {
  res.send("Home Page Working");
  res.end();
});

// CREATE
app.post("/", (req, res) => {

  res.send("POST request received");
  res.end();
});

// UPDATE
app.put("/", (req, res) => {
  res.send("PUT request received");
  res.end();
});

// DELETE
app.delete("/", (req, res) => {
  res.send("DELETE request received");
  res.end();
});

module.exports = app;