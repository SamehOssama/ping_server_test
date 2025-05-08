const dotenv = require('dotenv')
const express = require('express');
const app = express();

dotenv.config();

const port = process.env.PORT;

// Ping endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to our new api' });
});

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});