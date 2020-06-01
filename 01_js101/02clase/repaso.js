/* Repaso

Repasar switch.
Repasar funciones regualres, scopes y arrow function. //Aclaración.
Repasar funciones dentro de un objeto literal.// 
Repasar la diferencia entre JSON y Objeto literal: sintaxis y ¿Qué pasa con las funciones ?

*/

/* Condicionales switch 
Solo podemos evaluar igualdad entre el parámetro y los casos.*/

// stocks para diferentes colores de remeras:
let color = 'blanco';

switch(color) {
    case ('blanco'):
        console.log('Tenemos 10 remeras.');
        break;
    case('negro'):
        console.log('Tenemos 5 remeras.');
        break;
    case ('azul'):
        console.log('No tenemos stock en este momento.');
        break;   
    default:
        console.log('No tenemos ese color. Por favor, elegí otro.');     
        break;    
}


//Repasar funciones regualres, scopes y arrow function. //Aclaración.

let saludo = 'Hola fuera de la función'; //Scope global

function sumar (num1, num2){
    let saludo = 'hola dentro de la función'; //Scope local.
    console.log(saludo);
    return num1+num2 ;
}

// console.log(saludo);
// console.log(sumar(1,2));

//Arrow function.

let suma = (num1, num2) => {
    //código adiucional;
    ////código adiucional;
    return num1+num2;
}

console.log(suma(20,30));



//Repasar funciones dentro de un objeto literal.
let alumno = {
    nombre : 'Gonzalo',
    edad : 23,
    saludar : function(){
        return 'Hola a todos. Mi nombre es: ' + this.nombre;
    }
    //saludar: () => 'Hola a todos. Mi nombre es: ' + alumno.nombre
    //No podemos usar this con scope local en arrow functions
}

// console.log(alumno.saludar());

// let alumnoJson = {
//     "nombre": "Gonzalo",
//     "edad": "23",
//     }

let alumnoString = JSON.stringify(alumno);
console.log(alumnoString);
console.log(typeof alumnoString);
let alumnoObject = JSON.parse(alumnoString);
console.log(alumnoObject);
console.log(typeof alumnoObject);


// Callbacks
function multiplicar(num1, num2){
    return num1*num2;
}

function calcular(carlos, maria, callback){
    return callback(carlos, maria);
};

 console.log(calcular(20, 80, sumar));








