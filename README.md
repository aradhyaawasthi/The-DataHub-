# 🚀 The DataHub - Full Stack REST API Server

The DataHub is a Full Stack REST API project built using **Node.js**, **Express.js**, **MongoDB Atlas**, and **Mongoose**. It provides complete CRUD operations for blog posts, user management, MongoDB relationships, aggregation, and a mock login API. The project also includes a simple frontend dashboard and is deployed on Vercel.

## 🌐 Live Demo

**Live Project:** https://the-data-hub-delta.vercel.app/

## 📂 GitHub Repository

**Repository:** https://github.com/aradhyaawasthi/The-DataHub-

---

# ✨ Features

- RESTful API
- MongoDB Atlas Database Integration
- Mongoose ODM
- Create, Read, Update and Delete (CRUD) Operations
- User Management API
- User & Post Relationship
- Mongoose Populate
- MongoDB Aggregation Pipeline
- Mock Login API
- Custom Middleware for HTTP Method & URL Logging
- Frontend Dashboard
- Thunder Client Tested
- Vercel Deployment

---

# 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JavaScript
- HTML5
- CSS3
- Thunder Client
- Git & GitHub
- Vercel

---

# 📌 API Endpoints

## Home

```http
GET /
```

## Get All Posts

```http
GET /posts
```

## Get Single Post

```http
GET /posts/:id
```

## Create Post

```http
POST /posts
```

## Update Post

```http
PUT /posts/:id
```

## Delete Post

```http
DELETE /posts/:id
```

## Get Top 3 Recent Posts

```http
GET /posts/top/recent
```

## Create User

```http
POST /users
```

## Mock Login

```http
POST /login
```

---

# 🔑 Mock Login Credentials

```text
Email:
admin@gmail.com

Password:
123456
```

---

# 🗄️ Database Features

- MongoDB Atlas Integration
- Mongoose Schema Design
- User Schema
- Post Schema
- User-Post Relationship using ObjectId
- Populate User Details
- Aggregation Pipeline using:
  - $sort
  - $limit

---

# 📋 Project Structure

```text
The-DataHub
│
├── models
│   ├── Post.js
│   └── User.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── api
│   └── index.js
│
├── server.js
├── package.json
├── package-lock.json
├── README.md
└── .env
```

---

# ▶️ Run Locally

```bash
git clone https://github.com/aradhyaawasthi/The-DataHub-

cd The-DataHub-

npm install

node server.js
```

Server runs on:

```text
http://localhost:5000
```

---

# 🧪 Testing

The API has been successfully tested using **Thunder Client**.

Tested APIs:

- ✅ Create User
- ✅ Create Post
- ✅ Get All Posts
- ✅ Get Single Post
- ✅ Update Post
- ✅ Delete Post
- ✅ Populate User Details
- ✅ Aggregation Query
- ✅ Mock Login API

---

# 👩‍💻 Author

**Aradhya Awasthi**

B.Tech Computer Science Engineering

Kanpur Institute of Technology

---

# 📜 License

This project is created for educational and learning purposes.