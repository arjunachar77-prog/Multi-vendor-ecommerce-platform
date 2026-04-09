const express = require('express');
const router = express.Router();

// Mock database
const users = []; // This should be replaced with actual database calls

// Register endpoint
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
    }
    users.push({ username, password }); // In real use, hash the password
    res.status(201).json({ message: 'User registered successfully.' });
});

// Login endpoint
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password.' });
    }
    // In real use, generate a token here
    res.status(200).json({ message: 'Login successful.', token: 'fake-jwt-token' });
});

// Token endpoint
router.get('/token', (req, res) => {
    // Token verification logic goes here
    res.status(200).json({ message: 'Token is valid.' });
});

module.exports = router;