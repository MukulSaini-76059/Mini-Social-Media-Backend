# 🚀 Mini Social Media Backend

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express.js](https://img.shields.io/badge/Express.js-Framework-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green)
![JWT](https://img.shields.io/badge/JWT-Authentication-blue)

A **Node.js + Express + MongoDB** based mini social media application where users can register, login, create posts, like/unlike posts, and upload profile pictures.


---

## 🌐 Live Demo

- 🚀 Live Demo: https://mini-social-media-backend-1.onrender.com
- 💻 GitHub: https://github.com/MukulSaini-76059
- 🔗 LinkedIn: https://www.linkedin.com/feed/update/urn:li:activity:7436479157250953216/

---

## 📌 Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication
- 🔒 Password Hashing using Bcrypt
- 📝 Create and Edit Posts
- ❤️ Like / Unlike Posts
- 🖼 Upload Profile Picture using Multer
- 📦 MongoDB Database Integration
- 🛡 Protected Routes using Middleware
- 🎨 Dynamic UI using EJS + TailwindCSS

---


## 🛠 Tech Stack

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB
- Mongoose

**Authentication & Security**
- JSON Web Token (JWT)
- Bcrypt

**File Upload**
- Multer

**Frontend**
- EJS
- TailwindCSS

---

## 📸 Screenshots

### Login Page
<img width="1898" height="847" alt="image" src="https://github.com/user-attachments/assets/28f91360-b616-424f-a7c5-0e2ff3d6930f" />


### Profile Page
<img width="1896" height="895" alt="image" src="https://github.com/user-attachments/assets/0f9b0dac-dc83-40d9-ab5a-f6daea891986" />

---

## 📸 Features Overview

### 👤 User Authentication
- Secure registration and login
- Password hashing using bcrypt
- JWT token stored in cookies

### 📝 Posts
- Create new posts
- Edit existing posts

### ❤️ Likes
- Like or unlike posts
- Like count displayed dynamically

### 🖼 Profile Picture Upload
- Upload images using Multer
- Stored inside `public/images/uploads`

---

## 🚀 Future Improvements

- Add comments feature
- Implement pagination for posts
- Add notifications system
- Use Cloudinary for image storage
- Convert frontend to React

---  

## 📂 Project Structure

```
Mini-Social-Media-Backend
│
├── config
│   └── multerconfig.js
│
├── db
│   └── db.js
│
├── models
│   ├── user.js
│   └── post.js
│
├── public
│   └── images
│       └── uploads
│
├── views
│   ├── index.ejs
│   ├── login.ejs
│   ├── profile.ejs
│   ├── profileupload.ejs
│   └── edit.ejs
│
├── .env
├── app.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MukulSaini-76059/Mini-Social-Media-Backend.git
```

### 2️⃣ Go to project folder

```bash
cd Mini-Social-Media-Backend
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Create `.env` file

```
MONGODB=your_mongodb_connection_string
SECRET=your_jwt_secret
PORT=4000
```

### 5️⃣ Run the server

```bash
node app.js
```

Server will start at:

```
http://localhost:4000
```

---

## 📚 What I Learned

- Building a **Node.js backend project**
- Implementing **JWT authentication**
- Handling **file uploads**
- Managing **MongoDB relationships**
- Structuring a **real-world backend project**

---

## 👨‍💻 Author

**Mukul Saini**

---

⭐ If you like this project, consider giving it a **star on GitHub!**

## 📄 License

This project is licensed under the MIT License.
