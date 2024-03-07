// database.js
const sqlite3 = require('sqlite3').verbose();

// Create a new database object and open a database connection
let db = new sqlite3.Database('./myDatabase.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the SQLite database.');
});

// Create a new table
db.run('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE)', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Users table created.');
});

// Export the database object
module.exports = db;