# 📝 Taskinger – Smart Task Management System

Taskinger is a modern, developer-friendly task management platform designed to streamline personal and team productivity. Whether you're a solo dev, a startup, or a large team, Taskinger provides intuitive tools to help you manage tasks, deadlines, and collaboration with ease.

---

## 🚀 Features

- 🧠 **Smart Task Tracking** – Create, assign, and organize tasks with tags, priorities, and deadlines.
- 👥 **Team Collaboration** – Real-time updates, comments, and task assignments for effective teamwork.
- 📅 **Calendar Integration** – Visualize tasks and deadlines with an integrated calendar view.
- 🔔 **Notifications & Reminders** – Stay on track with smart alerts and updates.
- 📊 **Productivity Insights** – Analytics to track task completion rates, delays, and performance.
- 🔒 **Role-Based Access** – Secure, permissioned access for admins, team leads, and users.

---

## 🛠️ Tech Stack (Used)

- **Frontend**: React.js + Tailwind CSS  
- **Backend**: Node.js (Express) 
- **Database**: MongoDB  
- **Authentication**: JWT
- **Optional Integrations**: Google Calendar, Email  

---

## 📂 Project Structure

- 🔗 **Frontend Repository**: [Taskinger-frontend](https://github.com/shammasktl/Taskinger-frontend)  
- 🔗 **Backend Repository**: [Taskinger-Backend](https://github.com/risilmrk/Taskinger-Backend)

---

## 🌐 Live Demo

_Coming soon..._

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

### 👤 Contributors

- [@shammasktl](https://github.com/shammasktl) – Creator & Frontend Developer
- [@risilmrk](https://github.com/risilmrk) - Creator & Backend Developer

---
# API Routes

📝 **Frontend Developer Note:** Task & Project API Endpoints

---

## 📌 Base URLs:

- **URL:** `https://taskinger-backend.onrender.com`
- **Tasks:** `/api/v1/tasks`  
- **Projects:** `/api/v1/projects`

---

## ✅ Task Routes Overview

- `GET /api/v1/tasks` – Fetch all tasks (supports query like `?pending=true`)
- `POST /api/v1/tasks` – Add a new task
- `GET /api/v1/tasks/:id` – Get single task by ID
- `PATCH /api/v1/tasks/:id` – Update a task
- `DELETE /api/v1/tasks/:id` – Delete a task
- `PATCH /api/v1/tasks/:id/toggle-started` – Toggle task started status
- `PATCH /api/v1/tasks/:id/toggle-finished` – Toggle task finished status

🟡 **To get only pending tasks, use:**  
`GET /api/v1/tasks?pending=true`

---

## ✅ Project Routes Overview

- `GET /api/v1/projects` – Get all projects
- `POST /api/v1/projects` – Create a new project

  ---

## 📄 License

MIT License
