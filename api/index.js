const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// In-Memory Database
let posts = [];

// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "The DataHub API is Running!"
    });
});

// GET All Posts
app.get("/posts", (req, res) => {
    res.json(posts);
});

// GET Single Post
app.get("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    res.json(post);

});

// CREATE Post
app.post("/posts", (req, res) => {

    const { title, content } = req.body;

    const newPost = {
        id: posts.length + 1,
        title,
        content
    };

    posts.push(newPost);

    res.status(201).json({
        message: "Post created successfully",
        post: newPost
    });

});

// UPDATE Post
app.put("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const { title, content } = req.body;

    const post = posts.find(p => p.id === id);

    if (!post) {
        return res.status(404).json({
            message: "Post not found"
        });
    }

    post.title = title;
    post.content = content;

    res.json({
        message: "Post updated successfully",
        post
    });

});

// DELETE Post
app.delete("/posts/:id", (req, res) => {

    const id = parseInt(req.params.id);

    posts = posts.filter(post => post.id !== id);

    res.json({
        message: "Post deleted successfully"
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

module.exports = app;