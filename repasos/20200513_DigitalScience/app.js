const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const heroesRoutes = require('./routes/heroes');

app.listen(3000, function(){console.log('Running on 3000')});

//Rutas
app.use('/', homeRoutes);
app.use('/heroes', heroesRoutes);