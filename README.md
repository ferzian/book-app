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

```bash
book-app/
├── book-app-backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   ├── public/
│   ├── package.json
│   ├── .env
│   └── .env.example

├── book-app-frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js

├── package.json
└── README.md
```

---

## ⚙️ Installation, Configuration & Running

1. Clone repository

```bash
   git clone https://github.com/username/book-app.git
    cd book-app
```

2. Install dependencies

```bash
cd book-app-backend && npm install
cd ../book-app-frontend && npm install
cd ..
npm install

```

3. Configuration

    - Buat database "book-app" di MySQL.
   
    - Salin file ".env.example" ke ".env" di folder "book-app-backend/":

```bash
cp book-app-backend/.env.example book-app-backend/.env

```

4. Running

  **Development Mode**
   
   Menjalankan backend + frontend bersamaan:

```bash
npm run dev

```

  **Production Mode**

```bash
cd book-app-frontend
npm run build

cd ../book-app-backend
npm start

```

---

## ✨ Features

- User Authentication (Register/Login dengan JWT)
- CRUD Lapangan (Admin)
- CRUD Booking (User & Admin)
- Migration database dengan Sequelize
- Dashboard User → lihat & buat booking
- Dashboard Admin → kelola lapangan & approve booking

---

## 👨‍💻 Author

Project ini dibuat untuk pembelajaran oleh Ferzian.
