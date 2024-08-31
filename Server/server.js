const express = require('express');
const path = require('path');

const app = express();
const port = 8080; 

let temperatura;
let vlaznost;
let kreditnaKarta;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../Client')));
app.use(express.json());
// Ruta za prikaz index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Client', 'index.html'));
});

// Ruta za primanje podataka sa ESP32
app.post('/post-data', (req, res) => {
     temperatura = req.body.temp;
     vlaznost = req.body.hum;
     kreditnaKarta = req.body.card;
    console.log(`Temperatura: ${temperatura}`);
    console.log(`Vlaznost: ${vlaznost}`);
    console.log(`Skener kreditne kartice: ${kreditnaKarta}`);
    res.send('Podaci primljeni!');
});

// Ruta za slanje zahtjeva ESP32
app.get('/get-data', (req, res) => {
    res.send('Pošalji zahtjev na ESP32!');
});

app.get('/get-temp-data', (req, res) => {
    const data = {
        temp: temperatura, 
        hum: vlaznost    
    };
    res.json(data);
});

app.get('/get-card-data', (req, res) => {
    const data = {
        card: kreditnaKarta    
    };
    res.json(data);
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
