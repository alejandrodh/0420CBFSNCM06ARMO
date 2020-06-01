//definir que va a pasar cuando el usario pida listar tareas.


let listaDeTareas = [
    {
        titulo: 'Repaso Js',
        estado : 'Terminada',
    },
    {
        titulo: 'Armar 1ra parte app tareas',
        estado: 'En curso',
    },
    {
        titulo: 'Terminar app tareas',
        estado: 'Pendiente',
    },
];

//Pasada la vriable a formato JSON necesitamos poder traer los datos para operarlos.
const fs = require('fs');


let tareas = {
    //Crear una función que lea el archivo JSON.
    leerJson : function(){
        let listaDeTareas = fs.readFileSync('./data.json', 'utf8');
        listaDeTareas = JSON.parse(listaDeTareas);
                
        return listaDeTareas;
    },

    listar: function(){
        let listaDeTareas = this.leerJson();
        for(let i=0; i<listaDeTareas.length; i++){
            console.log(i + ' ' + listaDeTareas[i].titulo + ' | Estado: ' + listaDeTareas[i].estado);
        }

    },
    verUna : function(){
        //Todo: Listar una sola tarea. Tip: hay que usar el indice del array.
    },
    actualizar: function(){

        return listaDeTareas = [
            {
                titulo: 'Repaso Js',
                estado: 'Terminada',
            },
            {
                titulo: 'Armar 1ra parte app tareas',
                estado: 'Terminada',
            },
            {
                titulo: 'Terminar app tareas',
                estado: 'Pendiente',
            },
        ];
    },
    nuevaTarea: (){
        
    }

}
console.log(tareas.leerJson());

module.exports = tareas;