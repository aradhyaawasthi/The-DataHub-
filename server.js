const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const Post = require("./models/Post");
const User = require("./models/User");

const app = express();

const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("❌ MongoDB Connection Failed");
    console.log(err);
});

// Middleware
app.use(cors());
app.use(express.json());

// Custom Middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


// Home Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "The DataHub API is Running!"
    });
});
// CREATE USER

app.post("/users", async (req, res) => {

    try {

        const { name, email } = req.body;

        const newUser = await User.create({
            name,
            email
        });

        res.status(201).json({
            success: true,
            message: "User Created Successfully",
            data: newUser
        });

    } catch(error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});


// GET All Posts
app.get("/posts", async (req, res) => {

    try {

        const posts = await Post.find().populate("authorId");

        res.json({
            success: true,
            data: posts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});


// GET Single Post
app.get("/posts/:id", async (req, res) => {

    try {

        const post = await Post.findById(req.params.id).populate("authorId");

        if (!post) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.json({
            success: true,
            data: post
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});

// CREATE Post
app.post("/posts", async (req, res) => {

    try {

        const { title, content, authorId } = req.body;

        const newPost = await Post.create({
            title,
            content,
            authorId
        });

        res.status(201).json({
            success: true,
            message: "Post Created Successfully",
            post: newPost
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});



// UPDATE Post

app.put("/posts/:id", async (req, res) => {
    try {

        const { title, content } = req.body;

        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content
            },
            {
                new: true
            }
        );

        if (!updatedPost) {
            return res.status(404).json({
                success: false,
                message: "Post not found"
            });
        }

        res.json({
            success: true,
            message: "Post Updated Successfully",
            data: updatedPost
        });


    } catch(error) {

        res.status(500).json({
            success:false,
            message:error.message
        });

    }
});

// TOP 3 RECENT POSTS (Aggregation)

app.get("/posts/top/recent", async (req, res) => {

    try {

        const posts = await Post.aggregate([
            {
                $sort: {
                    createdAt: -1
                }
            },
            {
                $limit: 3
            }
        ]);

        res.json({
            success: true,
            message: "Top 3 Recent Posts",
            data: posts
        });


    } catch(error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

});
// DELETE Post
app.delete("/posts/:id", async (req,res)=>{

    try{

        const deletedPost = await Post.findByIdAndDelete(
            req.params.id
        );


        if(!deletedPost){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            });
        }


        res.json({
            success:true,
            message:"Post Deleted Successfully",
            data:deletedPost
        });


    }catch(error){

        res.status(500).json({
            success:false,
            message:error.message
        });

    }

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


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});