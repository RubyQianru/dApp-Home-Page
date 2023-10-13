// server.js
const express = require('express');
const articleRouter = require('./routes/Articles')
const app = express();
const port = 5000;

// Define API routes or other server logic here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
