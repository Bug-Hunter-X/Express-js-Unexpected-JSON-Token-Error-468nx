const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Uncommon Error: Unexpected token in JSON response
// This error occurs when Express tries to send a non-JSON response with a Content-Type header of 'application/json'.