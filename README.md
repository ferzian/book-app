# 📖 Book-App Lapangan Futsal

Aplikasi web sederhana untuk melakukan **booking lapangan futsal** berbasis **React** + **Express**.  
Project ini dibuat untuk para pengguna yang ingin memesan atau booking lapangan futsal secara online.

---

## 🚀 Tech Stack

- **Frontend**: React + Vite + React Router + Axios
- **Backend**: Express.js + Sequelize ORM
- **Database**: MySQL
- **Auth**: JWT + bcrypt

---

## 📂 Project Structure

book-app/
├── book-app-backend/
│ ├── src/
│ ├── public/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── middleware/
│ │ ├── models/
│ │ ├── routes/
│ ├── app.js
│ ├── package.json
│ └── .env
├── book-app-frontend/
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
├── package.json
└── README.md

---

## ⚙️ Installation, Configuration & Running

```bash
# Clone repository
git clone https://github.com/username/book-app.git
cd book-app

# Install dependencies
cd book-app-backend && npm install
cd ../book-app-frontend && npm install
cd ..
npm install

```

## 🛠️ Configuration
Buat database bookapp_futsal di MySQL.

Copy .env.example → .env di folder book-app-backend/ lalu isi dengan konfigurasi:

DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=bookapp_futsal
JWT_SECRET=supersecret