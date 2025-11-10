const express = require('express');
const cookieParser = require('cookie-parser');
// use bcryptjs to avoid native build issues across platforms
const bcrypt = require('bcryptjs');
const app = express();

// allow passing port as first CLI arg: `node index.js 3000`
const port = process.argv[2] ? Number(process.argv[2]) : 4000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const users = new Map();

app.post('/api/auth/create', (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ msg: 'username and password required' });
    if (users.has(username)) return res.status(400).json({ msg: 'User already exists' });

    try {
        const hashedPassword = bcrypt.hashSync(password, 10);
        users.set(username, hashedPassword);
        return res.status(200).json({ msg: 'User created successfully' });
    } catch (err) {
        console.error('Error creating user', err);
        return res.status(500).json({ msg: 'Internal error' });
    }
});

app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ msg: 'username and password required' });

    const hashedPassword = users.get(username);
    if (!hashedPassword) return res.status(401).json({ msg: 'User not found' });

    const match = bcrypt.compareSync(password, hashedPassword);
    if (!match) return res.status(401).json({ msg: 'Invalid password' });

    // set a simple cookie for demo purposes
    res.cookie('user', username, { httpOnly: true });
    return res.status(200).json({ msg: 'Login successful', username });
});

app.delete('/api/auth/logout', (req, res) => {
    res.clearCookie('user');
    return res.status(200).json({ msg: 'Logged out' });
});

app.listen(port, () => console.log(`Service running on port ${port}`));