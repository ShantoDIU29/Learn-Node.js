const path = require('path');
const app = require('./app');

app.get('/', (req, res) => {
  res.send('this is home page');
});

app.get('/register', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/contact', (req, res) => {
  res.send('this is contact page');
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('This is home page with post request');
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

module.exports = app;