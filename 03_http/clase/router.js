//Manejador de rutas

const router = {
    routes : function(req, res){
        //Construyendo un ruteador
        switch (req.url) {
            case '/':
                //Contenido de la respuesta. Tiene que ser obligatoriamente una cadena de texto.
                res.end('Home Page');
                break;
            case '/productos':
                let productos = [
                    { tipo: 'remera'},
                    { tipo: 'pantalón' },
                    { tipo: 'zapatillas' },
                ];
                

                res.end('Listado de productos.' + '\n\n' + 'El total de productos es: ' + productos.length );
                break;
            default:
                //Contenido de la respuesta. Tiene que ser obligatoriamente una cadena de texto.
                res.end('La página no existe');
        }

    }
  
}

module.exports = router;





