const http = require('http');
const router = require('./router');

console.log(router);



http.createServer(function(req, res){
    // Cabecera de la respuesta al cliente.
    res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf8'});
    router.routes(req, res);

})
.listen(3000, 'localhost', function(){ console.log('running on 3000')});