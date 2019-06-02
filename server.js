const express = require('express')
const app = express();
const hbs = require('hbs');
require('./helpers/helpers');

const port = process.env.PORT || 3000;

app.use( express.static( __dirname + '/public' ) );

// EXPRESS HBS ENGINE PARTIALS
hbs.registerPartials( __dirname + '/views/parciales/' );

app.set('view engine', 'hbs');

// ROUTES
app.get('/', function (req, res) {
  res.render('home', {
      nombre: 'FAbio Paredes'
  });
});

app.get('/about', function (req, res) {  
    res.render('about');
});
 
app.listen( port, () => {
    console.log(`Escuchando Peticiones en el puerto ${ port }.`);
});

