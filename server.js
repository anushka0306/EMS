const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mohitsql@123',  // Replace with your MySQL password
    database: 'event_management'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Database');
});

// User registration (sign-up)
app.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);  // Hash the password

    const query = `INSERT INTO users (username, password, role) VALUES (?, ?, ?)`;
    db.query(query, [username, hashedPassword, role], (err, result) => {
        if (err) throw err;
        res.send('User registered successfully');
    });
});

// User login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    console.log('Login attempt:', username, password); // Log username and entered password

    // Query to find user by username
    const query = `SELECT * FROM users WHERE username = ?`;
    db.query(query, [username], (err, results) => {
        if (err) throw err;
        
        // If user found
        if (results.length > 0) {
            const user = results[0];
            
            // Compare entered password with hashed password in the database
            const passwordIsValid = bcrypt.compareSync(password, user.password);
            
            if (passwordIsValid) {
                res.send({ message: 'Login successful', role: user.role });
            } else {
                res.status(401).send({ message: 'Invalid password' });
            }
        } else {
            res.status(404).send({ message: 'User not found. Please register first.' });
        }
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on port 3000');
});


