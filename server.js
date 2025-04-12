const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Serve the public folder
app.use(express.static(path.join(__dirname, "public")));

// Optional: Load homepage when visiting "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "home.html"));
});

// Products API
app.get("/api/products", (req, res) => {
  db.all("SELECT * FROM products", [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Start server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
