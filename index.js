const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

// Ping endpoint
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Root endpoint serving HTML
app.get('/', (req, res) => {
  const envValue = process.env.VAL || 'Not Set';
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Test Website</title>
    </head>
    <body>
        <h1 style="display: flex; justify-content: center; margin-bottom: 50px;">This is our test website</h1>
        <h2 style="display: flex; justify-content: center;">Value from env var:&nbsp;<span style="color: red;">${envValue}</span></h2>
        </body>
    </html>
  `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
