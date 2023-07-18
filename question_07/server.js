const express = require('express');

const app = express();
const port = 3000;

app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); // Generate a random number between 0 and 99

  res.json({ random: randomNumber });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});