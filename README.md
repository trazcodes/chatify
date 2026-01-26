# 💬 Chatify – Real-Time Chat Application

🚀 **Chatify** is a full-stack real-time messaging application built using the MERN stack and Socket.IO, deployed on AWS EC2 with Nginx and SSL, and frontend hosted on Vercel.

It supports secure authentication, real-time messaging, online user status, and media sharing.

---

## 🔗 Live Demo

* **Frontend:** [https://chatify-one-tawny.vercel.app/](https://chatify-one-tawny.vercel.app/)
* **Backend API:** [https://chatify.duckdns.org](https://chatify.duckdns.org)

---

## 📌 Features

* ✅ User Authentication (JWT + HTTP-only Cookies)
* ✅ Real-time Messaging with Socket.IO
* ✅ Online / Offline User Status
* ✅ One-to-One Chat
* ✅ Image Sharing (Cloudinary)
* ✅ Secure Cross-Domain Cookies
* ✅ Responsive UI
* ✅ Production Deployment (AWS + Nginx + SSL)

---

## 🛠 Tech Stack

### Frontend

* React (Vite)
* Zustand (State Management)
* Axios
* Tailwind CSS
* Socket.IO Client

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Socket.IO
* Cloudinary

### DevOps / Deployment

* AWS EC2 (Ubuntu)
* Docker
* Nginx (Reverse Proxy)
* Let’s Encrypt (SSL)
* Vercel (Frontend Hosting)
* DuckDNS (Domain)

---

## 📐 System Architecture

```
User Browser
     ↓
Vercel (Frontend)
     ↓ HTTPS
Nginx (AWS EC2)
     ↓
Node.js + Socket.IO (Docker)
     ↓
MongoDB + Cloudinary
```

---

## ⚙️ Environment Variables

### Backend (`.env`)

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
FRONTEND_URL=https://your-vercel-url.vercel.app
NODE_ENV=production
```

### Frontend (`.env`)

```env
VITE_BACKEND_URL=https://chatify.duckdns.org
```

---

## 💻 How to Run Locally

### 1️⃣ Clone Repository

```bash
git clone https://github.com/trazcodes/chatify.git
cd chatify
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file and add variables.

Run backend:

```bash
npm run dev
```

Backend runs on:

```
http://localhost:5000
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

### 4️⃣ Socket Support (Local)

Make sure backend is running before frontend.

Sockets connect automatically.

---

## 🐳 Docker Setup (Backend)

Build image:

```bash
docker build -t chatify-backend .
```

Run container:

```bash
docker run -d \
  -p 5001:5000 \
  --env-file .env \
  chatify-backend
```

---

## 🚀 Production Deployment

### Backend

* Hosted on AWS EC2
* Dockerized Node.js app
* Nginx reverse proxy
* SSL via Certbot

### Frontend

* Hosted on Vercel
* Environment variables configured
* Auto deployment via GitHub

---

## ⚠️ Challenges Faced & Solutions

### 1️⃣ CORS Issues

**Problem:** Cross-domain requests blocked.

**Solution:** Configured dynamic CORS whitelist using environment variables.

---

### 2️⃣ Authentication Not Persisting

**Problem:** Users logged out after refresh.

**Solution:** Implemented secure cookies with:

```js
sameSite: "none"
secure: true
httpOnly: true
```

---

### 3️⃣ Mixed Content Error

**Problem:** HTTPS frontend calling HTTP backend.

**Solution:** Configured SSL using Let’s Encrypt and Nginx.

---

### 4️⃣ Socket Not Connecting in Production

**Problem:** Online status not updating.

**Solution:** Fixed Socket.IO base URL using environment variables.

---

### 5️⃣ Domain Routing Conflict

**Problem:** Multiple projects on same EC2 conflicted.

**Solution:** Fixed Nginx virtual host priority and SSL routing.

---

## 📈 What I Learned

Through this project, I gained hands-on experience in:

* Real-world authentication systems
* WebSocket deployment
* Reverse proxy configuration
* SSL certificate management
* Docker production builds
* Debugging cloud infrastructure
* Cross-origin security

---

## 🙋‍♂️ Author

**Kushal Himmatsinghka**

* GitHub: [https://github.com/trazcodes](https://github.com/trazcodes)
* LinkedIn: [https://www.linkedin.com/in/kushal-himmatsinghka/](https://www.linkedin.com/in/kushal-himmatsinghka/)

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.
