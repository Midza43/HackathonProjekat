const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;  

app.use(bodyParser.urlencoded({ extended: true }));

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
