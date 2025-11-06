const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const app = express();

const path = require('path');

const authCookieName = 'token';
let users = []; // in-memory user store for demo

const port = process.argv.length > 2 ? Number(process.argv[2]) : 3000;

app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);

function setAuthCookie(res, token) {
    res.cookie(authCookieName, token, {
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax',
    });
}

async function createUser(email, password) {
    const passwordHash = await bcrypt.hash(password, 10);
    const user = { email, password: passwordHash, token: null };
    users.push(user);
    return user;
}

async function findUserBy(field, value) {
    return users.find(u => u[field] === value) || null;
}

apiRouter.post('/auth/create', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send({ msg: 'Missing email or password' });
        const existing = await findUserBy('email', email);
        if (existing) return res.status(409).send({ msg: 'User already exists' });
        const user = await createUser(email, password);
        user.token = uuidv4();
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).send({ msg: 'Missing email or password' });
        const user = await findUserBy('email', email);
        if (!user) return res.status(401).send({ msg: 'Invalid email or password' });
        const ok = await bcrypt.compare(password, user.password);
        if (!ok) return res.status(401).send({ msg: 'Invalid email or password' });
        user.token = uuidv4();
        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

apiRouter.delete('/auth/logout', async (req, res) => {
    try {
        const token = req.cookies[authCookieName];
        const user = await findUserBy('token', token);
        if (user) delete user.token;
        res.clearCookie(authCookieName);
        res.status(204).end();
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
});

// shipping
apiRouter.get('/shipping', (_req, res) => {
    res.send({
        addressRequired: false,
        options: [
            { id: 'standard', label: 'Standard (5-7 days)', cost: 5.0, estDays: 6 },
            { id: 'expedited', label: 'Expedited (2-3 days)', cost: 12.0, estDays: 2.5 },
            { id: 'overnight', label: 'Overnight (1 day)', cost: 25.0, estDays: 1 }
        ],
        currency: 'USD'
    });
});

// default error handler
app.use(function (err, _req, res, _next) {
    console.error(err);
    res.status(500).send({ type: err.name, message: err.message });
});

app.use(express.static(path.join(__dirname, '../public')));

app.use((_req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(port, () => {
    console.log(`Service is running on port ${port}`);
});