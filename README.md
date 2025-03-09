Kanban Board with JWT Authentication
A full-stack Kanban board application built with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript, featuring JWT-based authentication for secure access.

🚀 Features
🔒 JWT Authentication: Secure login and registration with token-based authentication.
🗂️ Task Management: Create, update, and manage tasks with status tracking.
👥 User Management: Supports user registration and login with hashed passwords.
🛡️ Protected Routes: Access control for different routes based on JWT.
📊 Responsive UI: Built with React and styled for a clean and intuitive experience.
📦 RESTful API: Well-structured API endpoints for user and task management.


📂 Project Structure
bash
Copy
Edit
Kanban-Board/
├── client/                # React frontend
├── server/                # Express backend
│   ├── src/
│       ├── controllers/   # Request handlers
│       ├── models/        # Sequelize models
│       ├── routes/        # API routes
│       ├── middleware/    # Auth middleware
├── .env                   # Environment variables
├── package.json
├── README.md


🛠️ Technologies Used
Frontend:
⚛️ React with TypeScript
🎨 CSS for styling
Backend:
🟢 Node.js and Express
🛢️ PostgreSQL with Sequelize ORM
🔑 JWT for authentication
🔒 bcrypt for password hashing
🔑 Environment Variables


🤝 Contributing
Fork the repository.
Create a new branch: git checkout -b feature/your-feature.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/your-feature.
Open a pull request.