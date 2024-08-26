const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = { message: 'Hello from API Server!' };
  res.json(data);
});

module.exports = app;
