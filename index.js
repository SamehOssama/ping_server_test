const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;
const numCards = parseInt(process.env.NUM, 10) || 5;

const mainHeading = 'This is our test website';

// Ping endpoint
app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

// Root endpoint serving HTML
app.get('/', (req, res) => {
    const envValue = process.env.VAL || 'not set';

    // Generate card HTML elements
    let cardsHtml = '';
    for (let i = 1; i <= numCards; i++) {
        cardsHtml += `
            <div class="card">
                <h3>Card ${i}</h3>
                <p>This is card number ${i}.</p>
            </div>
        `;
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Dynamic Cards</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background: #f2f2f2;
                }
                .header {
                    margin-bottom: 50px;
                }
                .header h1 {
                    margin: 0;
                    margin-bottom: 50px;
                }
                .header h2 span {
                    color: red;
                }
                .cards-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 20px;
                }
                .card {
                    background: white;
                    border-radius: 5px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
                    padding: 15px;
                    transition: box-shadow 0.3s;
                }
                .card:hover {
                    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
                }
                .card h3 {
                    margin-top: 0;
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>${mainHeading}</h1>
                <h2>Value from env var: <span>${envValue}</span></h2>
            </div>
            <div class="cards-container">
                ${cardsHtml}
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
