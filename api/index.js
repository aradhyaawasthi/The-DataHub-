const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

let posts = [];

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Get All Posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

// Create Post
app.post("/posts", (req, res) => {

  const { title, content } = req.body;

  const newPost = {
    id: Date.now(),
    title,
    content
  };

  posts.push(newPost);

  res.status(201).json({
    success: true,
    message: "Post Created Successfully",
    post: newPost
  });

});
// Get Single Post
app.get("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }

  res.json(post);

});

// Update Post
app.put("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);

  const { title, content } = req.body;

  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).json({
      success: false,
      message: "Post not found"
    });
  }

  post.title = title;
  post.content = content;

  res.json({
    success: true,
    message: "Post Updated Successfully",
    post
  });

});

// Delete Post
app.delete("/posts/:id", (req, res) => {

  const id = parseInt(req.params.id);

  posts = posts.filter(p => p.id !== id);

  res.json({
    success: true,
    message: "Post Deleted Successfully"
  });

});
// Mock Login API
app.post("/login", (req, res) => {

    const { email, password } = req.body;

    if (email === "admin@gmail.com" && password === "123456") {
        return res.json({
            success: true,
            token: "fake-jwt-token-123456789",
            message: "Login Successful"
        });
    }

    res.status(401).json({
        success: false,
        message: "Invalid Email or Password"
    });

});

// Export App for Vercel
module.exports = app;