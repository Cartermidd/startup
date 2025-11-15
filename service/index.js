const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const express = require('express');
const uuid = require('uuid');
const app = express();


const authCookieName = 'token';

//deleted user local array

const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
    if (await findUser('email', req.body.email)) {
        res.status(409).send({ msg: 'User already exists' })
    } else {
        const user = await createUser(req.body.email, req.body.password);

        setAuthCookie(res, user.token);
        res.send({ email: user.email });
    }
});

apiRouter.post('/auth/login', async (req, res) => {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) {
            user.token = uuid.v4();
            await DB.updateUser(user);
            setAuthCookie(res, user.token);
            res.send({ email: user.email });
            return;
        }
    }
    res.status(401).send({ msg: 'Unauthorized' });
});


apiRouter.delete('/auth/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName])
    if (user) {
        delete user.token;
        await DB.updateUser(user);
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
});

const verifyAuth = async (req, res, next) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
};

app.use(function (err, req, res, next) {
    res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

async function createUser(username, password) {
    const passwordHash = await bcrypt.hash(password, 10);

    const user = {
        email: username,
        password: passwordHash,
        token: uuid.v4(),
    };

    await DB.addUser(user);
    return user;
}

async function findUser(field, value) {
    if (!value) return null;

    if (field === 'email') {
        return await DB.getUser(value);
    } else if (field === 'token') {
        return await DB.getUserByToken(value);
    }
    return null;
}

//product fetching api
apiRouter.get('/products', async (req, res) => {
    try {
        const products = await DB.getProducts();
        res.json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send({ msg: 'Error fetching products' });
    }
});

//Admin product submittion
apiRouter.post('/admin/products', async(req,res) => {
    const { name, description, category, price } = req.body || {};
    if (!name || !description || !category || price == null) {
        return res.status(400).send({ msg: 'Missing required fields' });
    }
    try {

        const catproducts = await DB.getProductsByCategory(category);
        const productNum = length(catproducts) + 2;
        const productId = `${category}-${productNum}`;

    const newProduct = {
        id: productId,
        name,
        description,
        category,
        price,
        image: "/rockcanyon_design.png"
    };
    
        await DB.addProduct(newProduct);
        return res.status(201).send({ msg: 'Product added' });
    } catch (error) {
        console.error('Error adding product:', error);
        return res.status(500).send({ msg: 'Error adding product' });
    }
});






function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
    });
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});