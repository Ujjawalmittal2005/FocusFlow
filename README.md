# FocusFlow 🚀

A full-stack productivity platform designed to help students and self-learners stay focused, organized, and consistent. FocusFlow combines task management, Pomodoro-based focus sessions, note-taking, study videos, and productivity analytics into a single workspace.

---

## 🎯 Features

### 📋 Task Management

* Create, update, and manage study tasks
* Track task progress using focus cycles
* Monitor completed and pending tasks
* Soft-delete support to preserve historical data

### ⏱️ Pomodoro Timer

* 25-minute focus mode
* 50-minute deep-work mode
* Automatic break sessions
* Task-linked study sessions
* Real-time timer updates

### 📝 Notes Section

* Quick note-taking while studying
* Capture important ideas without leaving the dashboard
* Organized study workspace

### 🎥 Study Video Integration

* Embedded YouTube study videos directly in the dashboard
* Learn and focus without switching tabs
* Responsive video player with fullscreen support
* Creates an all-in-one study environment

### 📊 Statistics & Analytics

* Daily study statistics
* Weekly productivity tracking
* Monthly progress overview
* Total study time monitoring
* Task completion analytics

### 🎨 User Experience

* Modern glassmorphism-inspired UI
* Dark and light theme support
* Responsive design
* Smooth animations and transitions
* Clean and distraction-free interface

---

## 🔐 Authentication

* User registration and login
* JWT-based authentication
* Secure protected routes
* Password hashing using bcrypt
* Persistent user sessions

---

## 🛠️ Tech Stack

### Frontend

* React 18
* Vite
* TailwindCSS
* Axios
* React Router
* Context API

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Bcrypt
* Zod Validation
* CORS

---

## 📂 Project Structure

```text
FocusFlow/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── validators/
│   │   └── utils/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── api/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🚀 Installation

### Prerequisites

* Node.js (v16+)
* MongoDB Atlas or Local MongoDB
* npm

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Start backend:

```bash
npm start
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file:

```env
VITE_API_URL=http://localhost:3000
```

Start frontend:

```bash
npm run dev
```

---

## 📖 How It Works

1. Register a new account
2. Login securely
3. Create study tasks
4. Select a task from the dashboard
5. Start a Pomodoro focus session
6. Take notes while studying
7. Watch learning content directly from the dashboard
8. Track progress through statistics and analytics

## 🔌 API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`
* POST `/api/auth/logout`
* GET `/api/auth/me`

### Tasks

* GET `/api/task/display`
* POST `/api/task/create`
* PUT `/api/task/update/:id`
* DELETE `/api/task/delete/:id`
* PUT `/api/task/update-time`
* PUT `/api/task/addCycle`

### Statistics

* GET `/api/stats`
* POST `/api/stats/update`

---

## ⚙️ Key Implementation Details

### Soft Delete System

Tasks are never permanently removed.

* Deleted tasks are marked with a flag
* Historical data remains available
* Statistics remain accurate

### Time Tracking

* Focus session time is tracked per task
* Break sessions are excluded from totals
* Progress updates automatically

### Statistics Engine

* Daily, weekly, and monthly calculations
* Completion history tracking
* Aggregated productivity metrics

---

## 🔄 Recent Improvements

* Redesigned dashboard layout
* Added embedded study video section
* Improved dark/light theme system
* Enhanced glassmorphism UI
* Better responsiveness
* Improved task selection workflow

---

## 🔮 Future Enhancements

* AI Study Assistant
* AI Interview Preparation Module
* Custom Study Video Playlists
* Browser Notifications
* Session History
* PDF Export
* Mobile Application

---

## 👨‍💻 About The Project

I built FocusFlow to create a single productivity workspace for students and self-learners. Instead of switching between multiple applications for tasks, timers, notes, videos, and progress tracking, FocusFlow brings everything together in one focused environment.

The goal is to help users stay productive, track their learning journey, and maintain consistency while studying.

---

## 👤 Author

**Ujjawal Mittal**

* Full Stack Developer
* Built using React, Node.js, Express, MongoDB, and TailwindCSS

GitHub: https://github.com/Ujjawalmittal2005

---

## 📄 License

ISC
