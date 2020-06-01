const productsController = {
    index: function (req, res) {
        //Procesamos los que necesitemos
        let contenido = 'Estamos en la lista de productos';


        res.send(contenido);
    },
    show : function(req, res){
        res.send('Estas en el detalle del producto: ' + req.params.id );
    }

}

module.exports = productsController;