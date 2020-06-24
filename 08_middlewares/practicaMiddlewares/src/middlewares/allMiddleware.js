function allMiddleware(req, res, next){
    //Código del middleware
    // return res.send('Estamos en allMiddleware');
    console.log('Pasamos por allMiddleware')

    next();
}

module.exports = allMiddleware;