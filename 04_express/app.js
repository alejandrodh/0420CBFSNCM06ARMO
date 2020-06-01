const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const productsRoutes = require('./routes/products');

app.listen(3000, function(){
    console.log('Running on 3000');
});

app.use('/', homeRoutes);
app.use('/productos', productsRoutes);
app.use('/productos/:id', productsRoutes);
