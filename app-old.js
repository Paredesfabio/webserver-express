const http = require('http');

http.createServer( (req, res) => {    
        res.writeHead( 200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: 'Fabio Paredes',
            edad: 33,
            url: req.url
        };
        res.write( JSON.stringify(salida) );
        //res.write('Hola Mudo');
        res.end();
    })
    .listen(8082);

console.log('Escuchando en el puerto 8082 ');    