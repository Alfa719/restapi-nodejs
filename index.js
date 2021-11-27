const express = require('express');
const db = require('./config/database');
const router = require('./routes/mahasiswa');
const app = express();

app.use(express.json());

// Try connection
try {
    db.authenticate();
    console.log('Connection Success...');
} catch (error) {
    console.error(`Connection fail : ${error}`);
}

// Buat route prefix 
app.use('/mahasiswa', router);
app.listen(3000, () => console.log('Server running on port 3000'));