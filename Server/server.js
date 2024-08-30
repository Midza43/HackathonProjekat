const express = require('express');
const path = require('path');

const app = express();
const port = 8080; 

const temperatura = null;
const vlaznost = null;
app.use(express.static(path.join(__dirname, '../Client')));

// Ruta za prikaz index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client', 'index.html'));
});

// Ruta za primanje podataka sa ESP32
app.post('/post-data', (req, res) => {
     temperatura = req.body.temp;
     vlaznost = req.body.hum;
    console.log(`Temperatura: ${temperatura}`);
    console.log(`Vlaznost: ${vlaznost}`);
    res.send('Podaci primljeni!');
});

// Ruta za slanje zahtjeva ESP32
app.get('/get-data', (req, res) => {
    res.send('Pošalji zahtjev na ESP32!');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
