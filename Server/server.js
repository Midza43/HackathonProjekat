const express = require('express');
const path = require('path');

const app = express();
const port = 8080; 

app.use(express.static(path.join(__dirname, '../Client')));

// Ruta za prikaz index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client', 'index.html'));
});

// Ruta za primanje podataka sa ESP32
app.post('/post-data', (req, res) => {
    const sensorValue = req.body.sensor;
    console.log(`Vrijednost sa senzora: ${sensorValue}`);
    res.send('Podaci primljeni!');
});

// Ruta za slanje zahtjeva ESP32
app.get('/get-data', (req, res) => {
    res.send('Pošalji zahtjev na ESP32!');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
