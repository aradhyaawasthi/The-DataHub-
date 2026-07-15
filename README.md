# 🚀 The DataHub - REST API Server

The DataHub is a Full Stack REST API project built using **Node.js** and **Express.js**. It provides CRUD operations for blog posts along with a mock login API. The project also includes a simple frontend dashboard and is deployed on Vercel.

## 🌐 Live Demo

**Live Project:** https://the-data-hub-delta.vercel.app/

## 📂 GitHub Repository

**Repository:** https://github.com/aradhyaawasthi/The-DataHub-

---

## ✨ Features

- RESTful API
- Create, Read, Update and Delete (CRUD) Operations
- Mock Login API
- Custom Middleware for HTTP Method & URL Logging
- In-Memory Database
- Frontend Dashboard
- Thunder Client Tested
- Vercel Deployment

---

## 🛠️ Technologies Used

- Node.js
- Express.js
- JavaScript
- HTML5
- CSS3
- Thunder Client
- Git & GitHub
- Vercel

---

## 📌 API Endpoints

### Home

```http
GET /
```

### Get All Posts

```http
GET /posts
```

### Get Single Post

```http
GET /posts/:id
```

### Create Post

```http
POST /posts
```

### Update Post

```http
PUT /posts/:id
```

### Delete Post

```http
DELETE /posts/:id
```

### Mock Login

```http
POST /login
```

---

## 🔑 Mock Login Credentials

```text
Email:
admin@gmail.com

Password:
123456
```

---

## 📋 Project Structure

```
The-DataHub
│
├── api
│   └── index.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## ▶️ Run Locally

```bash
git clone https://github.com/aradhyaawasthi/The-DataHub-

cd The-DataHub-

npm install

npm start
```

Server runs on:

```text
http://localhost:5000
```

---

## ✅ Testing

The API has been successfully tested using **Thunder Client**.

---

## 👩‍💻 Author

**Aradhya Awasthi**

B.Tech CSE Student

Kanpur Institute of Technology

---

## 📜 License

This project is created for educational and learning purposes.