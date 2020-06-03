const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');

// Definiendo el template engine
app.set('view engine', 'ejs');
// Configuración en caso de cambio de carpeta de vistas
// app.set('views', __dirname + '/views');

//Definimos la carpeta de archivos publicos o archivos estáticos.
app.use(express.static(__dirname + '/public'));



app.listen(3000, function(){
    console.log('Running on 3000');
})

app.use('/', homeRoutes);