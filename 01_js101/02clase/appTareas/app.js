//Entry point de aplicación de tareas.
const tareas = require('./tareas');
let action = process.argv[2];
console.log(tareas);


switch(action){
    case ('listar') :
        //De alguna manera tenemos que listar todas las tareas.
        console.log('Lista de tareas');
        console.log('===============');
        console.log();
        tareas.listar();
        console.log();
        break; 
    
    case(undefined):
        console.log('Por favor, elija una acción.');
        break;
    
    default:
        console.log('La acción solicitada no existe. Por favor, elija otra.');
        break;

}
