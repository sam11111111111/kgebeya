const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("products.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    image TEXT
  )`);

  // Optional: Insert some products (run only once)
  db.run(`INSERT INTO products (name, price, image) VALUES 

    ('✅ **Brand:** MSI   RAIDER**', 185000, 'L018b.jpg'),

    ('Wireless Earbuds', 59.99, 'earbuds.jpg'),

    ('VICTUS GAMING', 160000, 'CK001.jpg')
  `);
});

module.exports = db;
