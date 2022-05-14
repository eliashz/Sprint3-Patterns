import express from 'express';
import fs from 'fs';

const app = express();

//Middleware
app.use((req, res, next) => {
    const time = new Date().toISOString();
    console.log(`[${time}] Request de tipus ${req.method} rebut`);
    next();
});

app.get('/api', (req, res) => {
    const data = fs.readFileSync('data.json', 'utf8');
    res.send(data);
});

app.listen(3000, () => console.log('API listening on port 3000.'));

//http://localhost:3000/api