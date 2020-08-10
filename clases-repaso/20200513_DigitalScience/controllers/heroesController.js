const fs = require('fs');
const path = require('path');

const heroesController = {
    index : function(req, res){
        // console.log(path.join(__dirname, '..', 'data', 'science.json'));
        let contenido = fs.readFileSync(path.join(__dirname, '..', 'data', 'science.json'), 'utf-8');
        //readFileSync retorna un archivo. science.json es un archivo json. Su contenido

        res.send(contenido); //send manda al navegador texto plano.
    },
    show : function(req, res){
        //traer los datos del json
        let dataJson = fs.readFileSync(path.join(__dirname, '..', 'data', 'science.json'), 'utf-8');
        //Transformarlo en operable
        let dataObject = JSON.parse(dataJson);
        let parametroDeUrl = req.params.id;

        //recorrer el json operable
        dataObject.forEach(function(cientifico){
            if (cientifico.id == parametroDeUrl){
                //Encontrar un cientifico cuyo id coincida con lo pedido en la ruta
                //Armar la frase a mandar al navegador
                res.send('Hola, mi nombre es: ' + cientifico.nombre + '. Mi profesión es: ' + cientifico.profesion);
           
            }
        });
        //Armar la frase a mandar al navegador
        res.send('No lo encontramos :(')        

            //Armar la frase a mandar al navegador
        res.send(contenido);
    },
    detail : function(req, res){
        //traer los datos del json
        let dataJson = fs.readFileSync(path.join(__dirname, '..', 'data', 'science.json'), 'utf-8');
        //Transformarlo en operable
        let dataObject = JSON.parse(dataJson);
        let id = req.params.id;
        let ok = req.params.ok;

        //Encontrar el heroe.
        let heroe = dataObject.find(function(cientifico){
            return cientifico.id == id;
        });
        
        if(heroe){
            if(ok != "ok"){
                res.send(heroe.nombre + ' lamento que no quieras saber mas de mi')
            }else{
                res.send(heroe.nombre + '\n' + heroe.resenia)
            }
        }else{
            res.send('No se encontro un heroe');
        }
    }

}

module.exports = heroesController;

