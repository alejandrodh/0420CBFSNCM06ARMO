const homeController = {
    index : function(req, res){
        let contenido = 'Aquí encontrarás algunos de los científicos y m,atemáticos desatacados en el mundo....';
        res.send(contenido);
    }

}


module.exports = homeController;