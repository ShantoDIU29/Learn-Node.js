const express = require("express");

const app = express();
const PORT = 3000;

// middleware (if you later use forms)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route: product id (only number allowed)
app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  if (!/^\d+$/.test(id)) {
    return res.status(400).json({
      message: "Only numeric ID allowed",
    });
  }

  res.send(`<h2>ID = ${id}</h2>`);
});

// 404 handler (safe version)
app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// server start
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});