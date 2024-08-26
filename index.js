const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const data = { message: 'Hello from API Server!' };
  res.json(data);
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});
