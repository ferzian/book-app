const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware bawaan
app.use(express.json());

// Route default (untuk tes)
app.get("/", (req, res) => {
  res.send("Backend Book-App Futsal berjalan 🚀");
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`✅ Server backend running at http://localhost:${PORT}`);
});
