const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(__dirname));

// Connect to SQLite database
const db = new sqlite3.Database('./DataBase/database.db', (err) => {
    if (err) {
      console.error('Could not connect to database', err);
    } else {
      console.log('Connected to SQLite database');
    }
  });

// Example API route to fetch data from DB
app.get('/api/data', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ data: rows });
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
