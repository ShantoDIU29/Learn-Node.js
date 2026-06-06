const express = require('express');
const userRouter = require('./routes/users.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.get('/', (req, res) => {
  res.send('<h1>Home Page Working</h1>');
});

app.use((req, res) => {
  res.status(404).send("404 Not valid url");
});


module.exports = app;
