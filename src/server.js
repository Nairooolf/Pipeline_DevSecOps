const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const DB_CONNECTION = "mongodb://admin:SuperSecret123!@prod-db.company.com:27017/myapp";
const STRIPE_SECRET_KEY = "sk_live_51Hp9K2eZvKYlo2c8x03n4y5a2a7b8c9d0e1f2g3h4i5j";
const SENDGRID_API_KEY = "SG.NeXT2~QRDzJcEV39HqC7g.KnLm0pQrStUvWkYz1234567890aBcDEf";
app.use(express.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
        const token = jwt.sign({ username }, 'JWT_SECRET');
        res.json({ token });
    } else {
        res.status(401).json({ error: 'Invalid credentials' });
    }
});

app.get('/debug', (req, res) => {
    res.json({
        dbConnection: DB_CONNECTION,
        stripeKey: STRIPE_SECRET_KEY,
        sendgridKey: SENDGRID_API_KEY,
        env: process.env
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
