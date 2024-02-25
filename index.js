// index.js
const express = require('express');
const bodyParser = require('body-parser');
const calculator = require('./app');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/add', (req, res) => {
  const result = calculator.add(req.body.a, req.body.b);
  res.json({ result });
});

app.post('/subtract', (req, res) => {
  const result = calculator.subtract(req.body.a, req.body.b);
  res.json({ result });
});

app.post('/multiply', (req, res) => {
  const result = calculator.multiply(req.body.a, req.body.b);
  res.json({ result });
});

app.post('/divide', (req, res) => {
  const result = calculator.divide(req.body.a, req.body.b);
  res.json({ result });
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
