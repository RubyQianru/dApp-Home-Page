// server.js
// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost/blogDB', { useNewUrlParser: true, useUnifiedTopology: true });

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Blog = mongoose.model('Blog', blogSchema);

// Define API routes
app.get('/api/posts', async (req, res) => {
  const posts = await Blog.find();
  res.json(posts);
});

// More routes for creating, updating, and deleting blog posts

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
