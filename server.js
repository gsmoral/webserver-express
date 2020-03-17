const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

// Desde heroku no sabemos que puerto nos asigna, por eso lo leemos o ponemos 3000 para local
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', function(req, res) {
    //res.send('Hello World');
    // let salida = {
    //     nombre: 'Guillermo',
    //     edad: 47,
    //     url: req.url
    // };

    //res.send(salida);

    res.render('home', {
        nombre: 'guillermo'
    });
});

app.get('/about', function(req, res) {

    res.render('about');
});

app.get('/data', function(req, res) {
    res.send('Hola data');
});


// app.listen(3000); Asi también funciona
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});