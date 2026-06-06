const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text({ type: 'text/plain' }));

app.get('/', (req, res) => {
  res.send("This is Home Page");
});

app.post('/', (req, res) => {
  console.log(req.body);

  res.json({
    message: "Data received",
    data: req.body
  });
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError) {
    res.status(400).json({ message: "Invalid JSON data" });
    return;
  }

  next(err);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
