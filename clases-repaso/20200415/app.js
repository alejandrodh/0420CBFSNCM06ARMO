//Traemos las operaciones de la app
const operations = require('./operations');


//Obtener el dato que el usuario escribe en la terminal.
let action = process.argv[2];
let opcion = process.argv[3];



switch(action){

    case('listar'):
    // Listar las tareas.
        operations.listar();
        break;
    
    case('verUna'):
        // if(opcion !== undefined){
        //     operations.verUna(opcion);
        // } else {
        //     console.log("Por favor, elija una tarea para ver."); 
        // }
        //¿Cómo contener el error de usuario cuando pasa un número mayor a la cantida de tareas del array? Tal vez tengamos que modificar el if.
        operations.verUna(opcion);
        break;

    case(undefined):
        console.log('Por favor elija una acción a realizar.');
        break;
    
    default:
        console.log('La acción solicitada no existe.');
        break;     

}
