const homeController = {

    index: function(req, res){
        // return res.send('¡¡¡Llegamos!!!');

        let alumnos = ['Ale', 'Gonza', 'Manu', 'Carli', 'Jesica'];

        let variablesACompartir = {
            nombre: "Ale",
            alumnos: alumnos,
        }

        return res.render('index', variablesACompartir );          
    }

}

module.exports = homeController;