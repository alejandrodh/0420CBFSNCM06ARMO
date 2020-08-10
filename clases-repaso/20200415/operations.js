//Tenemos las acciones del usuario en la app.

const fs = require('fs'); //Los módulos nativos no se llavan './'

let operations = {
    leerJson: function(){
        //Leer los datos del json y dejarlos disponibles.
    },

    listar: function(){
        //Traigo los datos del data.json
        let listaDeTareas = fs.readFileSync('./data.json', 'utf8');
        //Actualizo la variable con los datos trasnformados en objeto
        listaDeTareas = JSON.parse(listaDeTareas);

        console.log('Lista de tareas');
        console.log('===============');
        console.log();
        
        for(let i=0; i<listaDeTareas.length; i++){
            console.log(i + listaDeTareas[i].titulo + ' | Estado: ' + listaDeTareas[i].estado);
        }
        console.log();
        // console.log('Acá va la lista de tareas que ya veremos como mostrar.');
    },

    verUna: function(opcion){  
         
        //Traigo los datos del data.json
        let listaDeTareas = fs.readFileSync('./data.json', 'utf8');
        //Actualizo la variable con los datos trasnformados en objeto
        listaDeTareas = JSON.parse(listaDeTareas);

        console.log(opcion + ' ' + listaDeTareas[opcion].titulo + ' | Estado: ' + listaDeTareas[opcion].estado)
        }

    }

}

module.exports = operations;