//Tenemos las acciones del usuario en la app.

const fs = require('fs'); //Los módulos nativos no se llavan './'

let operations = {
    leerJson: function(){
        if (fs.existsSync('data.json')) {
            //Leer los datos del json y dejarlos disponibles.
            let listaDeTareas = fs.readFileSync('./data.json', 'utf8');
            listaDeTareas = JSON.parse(listaDeTareas);

            return listaDeTareas;
        } else {
            return [];
        }
    },
    escribirJson : function(datos){
        let data = JSON.stringify(datos, null, ' ');
        fs.writeFileSync('data.json', data);
    },

    listar: function(){
        //Traigo los datos del data.json
        let listaDeTareas = this.leerJson();

        console.log('Lista de tareas');
        console.log('===============');
        //Todo 1 Reemplazar for por foreach
        for(let i=0; i<listaDeTareas.length; i++){
            console.log(i + ' ' + listaDeTareas[i].titulo + ' | Estado: ' + listaDeTareas[i].estado);
        }
        console.log();
        // console.log('Acá va la lista de tareas que ya veremos como mostrar.');
    },

    verUna: function(opcion){    
        //Traigo los datos del data.json
        let listaDeTareas = this.leerJson();
        console.log();
        console.log("Listando una tarea");
        console.log("==================");
        console.log(opcion + ' ' + listaDeTareas[opcion].titulo + ' | Estado: ' + listaDeTareas[opcion].estado)
        console.log();
    },

    crear: function(unaNuevaTarea){
        let listaDeTareas = this.leerJson();
        listaDeTareas.push(unaNuevaTarea);
        this.escribirJson(listaDeTareas);
        console.log('La tarea se agregó con éxito.')
    },

    borrar: function(num){
        let listaDeTareas = this.leerJson();
        listaDeTareas.splice(num,1);
        this.escribirJson(listaDeTareas);
        console.log('La tarea fue eliminada con éxito');  
    },

    cambiarEstado: function(indice, estado){
        let listaDeTareas = this.leerJson();
        if (listaDeTareas[indice]){
            listaDeTareas[indice].estado = estado;
            this.escribirJson(listaDeTareas);
            console.log('La tarea fue actualizada con éxito');  
        } else {
            console.log('La tarea indicada no existe');  
        }
        
    }



}

module.exports = operations;