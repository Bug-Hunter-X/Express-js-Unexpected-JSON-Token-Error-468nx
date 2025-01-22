const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Correct approach 1: Sending plain text
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello World!');

  // Correct approach 2: Sending JSON
  // res.json({ message: 'Hello World!' });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});