const homeController = {

    index: function(req, res){
        // return res.send('¡¡¡Llegamos!!!');

        let alumnos = ['Ale', 'Gonza', 'Manu', 'Carli', 'Jesica'];

        let variablesACompartir = {
            nombre: "Ale",
            alumnos: alumnos,
        }

        // return res.render('index', variablesACompartir );          
        return res.sendFileSync(__dirname + '/../views/index.html')
    }

}

module.exports = homeController;